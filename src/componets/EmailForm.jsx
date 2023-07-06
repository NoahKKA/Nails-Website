import { useState, useEffect } from "react";
import { supabase } from "../SupaBaseClient";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const timeBlocks = [];
const startTime = new Date("1970/01/01 08:00").getTime();
const endTime = new Date("1970/01/01 18:00").getTime();
const hourMilliseconds = 60 * 30 * 1000;

for (
  let timestamp = startTime;
  timestamp <= endTime;
  timestamp += hourMilliseconds
) {
  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  timeBlocks.push({ label: time, value: time });
}
export default function EmailForm() {
  const [accessories, setAccessories] = useState([]);
  const [priceEstimate, setPriceEstimate] = useState(60);
  const [selectedDate, setSelectedDate] = useState(null);

  const fetchAccessoryData = async () => {
    try {
      const { data, error } = await supabase.from("accesories").select("*");
      if (error) {
        console.log("ERROR FETCHING ACCESORIES DATA", error.message);
      } else {
        console.log("fetched accesorie data", data);
        setAccessories(data);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    fetchAccessoryData();
  }, []);

  const handleAccessoryChange = (e, accessoryId) => {
    const isChecked = e.target.checked;

    // Find the accessory with the matching ID
    const selectedAccessory = accessories.find(
      (accessory) => accessory.accesories_id === accessoryId
    );

    if (selectedAccessory) {
      const accessoryPrice = parseFloat(selectedAccessory.price);

      setAccessories((prevAccessories) =>
        prevAccessories.map((accessory) =>
          accessory.accesories_id === accessoryId
            ? {
                ...accessory,
                checked: isChecked,
                quantity: isChecked ? accessory.quantity : 0,
              }
            : accessory
        )
      );

      setPriceEstimate((prevPriceEstimate) => {
        if (isChecked) {
          const quantity = selectedAccessory.quantity || 0;
          const totalAccessoryPrice = selectedAccessory.isPerEach
            ? accessoryPrice * quantity
            : accessoryPrice;
          return prevPriceEstimate + totalAccessoryPrice;
        } else {
          const quantity = selectedAccessory.quantity || 0;
          const totalAccessoryPrice = selectedAccessory.isPerEach
            ? accessoryPrice * quantity
            : accessoryPrice;
          return prevPriceEstimate - totalAccessoryPrice;
        }
      });
    }
  };

  const handleQuantityChange = (e, accessoryId) => {
    const quantity =
      e.target.value.trim() === "" ? 0 : parseInt(e.target.value);

    if (isNaN(quantity)) {
      return;
    }

    if (quantity < 0) {
      e.target.value = 0;
    } else {
      const selectedAccessory = accessories.find(
        (accessory) => accessory.accesories_id === accessoryId
      );

      if (selectedAccessory) {
        const accessoryPrice = parseFloat(selectedAccessory.price);
        const prevQuantity = selectedAccessory.quantity || 0;

        setPriceEstimate((prevPriceEstimate) => {
          const prevTotalPrice = prevQuantity * accessoryPrice;
          const newTotalPrice = quantity * accessoryPrice;

          return prevPriceEstimate - prevTotalPrice + newTotalPrice;
        });

        setAccessories((prevAccessories) =>
          prevAccessories.map((accessory) =>
            accessory.accesories_id === accessoryId
              ? { ...accessory, quantity: quantity }
              : accessory
          )
        );
      }
    }
  };

  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleStartTimeChange = (e) => {
    const startTime = e.target.value;
    setSelectedStartTime(startTime);

    // Calculate end time
    const startTimestamp = new Date(`1970/01/01 ${startTime}`).getTime();
    const endTimestamp = startTimestamp + 4 * 60 * 60 * 1000; // 4 hours
    const endTime = new Date(endTimestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setAppointmentFormData((prevFormData) => ({
      ...prevFormData,
      startTime,
      endTime,
    }));

    setDropdownVisible(false);
  };

  const [appointmentFormData, setAppointmentFormData] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    priceEstimate: 0,
  });

  const createAppointment = async (e) => {
    e.preventDefault();

    try {
      const updatedAppointmentFormData = {
        ...appointmentFormData,
        priceEstimate: priceEstimate,
      };

      const { data, error } = await supabase
        .from("appointments")
        .insert([updatedAppointmentFormData]);

      if (error) {
        throw error;
      } else {
        console.log("Form Submission Successful.", data);
        window.location.reload();
      }
    } catch (err) {
      console.log("Error occurred during form submission", err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <h2
          style={{
            fontFamily: "Cormorant Upright serif",
            fontWeight: "bolder",
          }}
        >
          Schedule an Appointment
        </h2>
        <h4>
          Base fee of $60
        </h4>
        <form className="container mt-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) =>
                setAppointmentFormData((prevFormData) => ({
                  ...prevFormData,
                  name: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <div className="input-group">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  let formattedDate = null; // Declare formattedDate outside the onChange function
                  if (date !== null) {
                    formattedDate = date.toISOString().split("T")[0];
                  }
                  setAppointmentFormData((prevFormData) => ({
                    ...prevFormData,
                    date: formattedDate,
                  }));
                }}
                className="form-control"
                placeholderText="YYYY-MM-DD"
                dateFormat="yyyy-MM-dd"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="start-time" className="form-label">
              Start Time:
            </label>
            <div
              className="form-control"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              {selectedStartTime || "Select Start Time"}
            </div>
            {dropdownVisible && (
              <select
                id="start-time"
                name="startTime"
                className="form-control"
                value={selectedStartTime}
                onChange={handleStartTimeChange}
                required
                size={7}
              >
                {timeBlocks.map((block) => (
                  <option key={block.value} value={block.value}>
                    {block.label}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="end-time" className="form-label">
              End Time:
            </label>
            <input
              type="text"
              id="end-time"
              name="endTime"
              className="form-control"
              placeholder="End Time"
              value={appointmentFormData.endTime}
              readOnly
              required
            />
          </div>

          <div>
            {accessories.map((accessory) => (
              <div key={accessory.accesories_id} className="form-check">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    id={accessory.accesories_id}
                    name={accessory.name}
                    className="form-check-input"
                    onChange={(e) =>
                      handleAccessoryChange(e, accessory.accesories_id)
                    }
                  />
                  <label htmlFor={accessory.id} className="form-check-label">
                    {accessory.name} = {accessory.price}
                  </label>
                  {accessory.isPerEach && (
                    <div
                      className="input-group ml-2"
                      style={{ maxWidth: "150px" }}
                    >
                      <input
                        type="number"
                        id={`quantity_${accessory.accesories_id}`}
                        name={`quantity_${accessory.accesories_id}`}
                        className="form-control"
                        placeholder="Quantity"
                        disabled={!accessory.checked}
                        onChange={(e) =>
                          handleQuantityChange(e, accessory.accesories_id)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4 mb-3">
            <h2 className="text-center">Price Estimate: ${priceEstimate}</h2>
          </div>

          <button
            type="submit"
            className="btn btn-primary d-flex mx-auto mb-3"
            onClick={(e) => createAppointment(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

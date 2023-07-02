import { useState} from "react";
import { supabase } from "../SupaBaseClient";

const timeBlocks = [];
const startTime = new Date("1970/01/01 08:00").getTime();
const endTime = new Date("1970/01/01 18:00").getTime();
const hourMilliseconds = 60 * 30 * 1000;

for (let timestamp = startTime; timestamp <= endTime; timestamp += hourMilliseconds) {
  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  timeBlocks.push({ label: time, value: time });
}
export default function EmailForm() {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("appointments").select("*");
      if (error) {
        console.log("Error fetching data:", error.message);
      } else {
        console.log("Fetched data:", data);
      }
    } catch (err) {
      console.log("Error occurred during data fetching:", err);
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

    setDropdownVisible(false)
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

      const { data, error } = await supabase
        .from("appointments")
        .insert([appointmentFormData]);

      if (error) {
        throw error;
      } else {
        console.log("Form Submisson Succesfull.", data);
        fetchData();
        window.location.reload();
      }
    } catch (err) {
      console.log("Error occurred during form submission", err);
    }
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'Cormorant Upright serif', fontWeight: 'bolder' }}>Schedule an Appointment</h2>
      <form className="container mt-12">
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
          <input
            type="text"
            id="date"
            name="date"
            className="form-control"
            placeholder="YYYY/MM/DD"
            onChange={(e) => {
              const formattedDate = new Date(e.target.value)
                .toISOString()
                .split("T")[0];
              setAppointmentFormData((prevFormData) => ({
                ...prevFormData,
                date: formattedDate,
              }));
            }}
            required
          />
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

        <div className="mb-3">
          <label htmlFor="priceEstimate" className="form-label">
            Price Estimate:
          </label>
          <input
            type="number"
            id="priceEstimate"
            name="priceEstimate"
            className="form-control"
            placeholder="accesories"
            onChange={(e) =>
              setAppointmentFormData((prevFormData) => ({
                ...prevFormData,
                priceEstimate: e.target.value,
              }))
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => createAppointment(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

import Default from "./DefaultPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../SupaBaseClient";

function EditPage() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [accessories, setAccessories] = useState([]);

  const fetchAppointmentById = async () => {
    try {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .eq("appointmentId", id)
        .single();
      if (error) {
        console.log("Error fetching data:", error.message);
      } else {
        console.log("Fetched data:", data);
        setAppointment(data);
      }
  
      if (data && data.selectedAccessories && data.selectedAccessories.length > 0) {
        const { data: accessoryData, error: accessoryError } = await supabase
          .from("accesories")
          .select("*")
          .in("accesories_id", data.selectedAccessories);
        if (accessoryError) {
          console.log("Error fetching accessory data:", accessoryError.message);
        } else {
          console.log("Fetched accessory data:", accessoryData);
          setAccessories(accessoryData);
        }
      }
    } catch (err) {
      console.log("Error occurred during data fetching:", err);
    }
  };
  
  useEffect(() => {
    fetchAppointmentById();
  }, [id]);

  const handleDeletedAppointment = async () => {
    try {
      const { error } = await supabase
        .from("appointments")
        .delete()
        .eq("appointmentId", id);
      if (error) {
        throw error;
      }

      window.location.href = "/Calendar";
    } catch (err) {
      throw err;
    }
  };

  return (
    <Default>
      {appointment.name && (
        <div className="text-center mt-5">
          <h4>{appointment.name}</h4>
          <h2>{appointment.date}</h2>
          <p>
            <strong>Start Time:</strong> {appointment.startTime}
          </p>
          <p>
            <strong>End Time:</strong> {appointment.endTime}
          </p>
          <p>
            <strong>Price Estimate:</strong> ${appointment.priceEstimate}
          </p>

          {accessories.length > 0 && (
            <div>
              <h4>Selected Accessories:</h4>
              <ul>
                {accessories.map((accessory) => (
                  <li key={accessory.accessoryId}>{accessory.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleDeletedAppointment}
          className="btn btn-danger mb-5"
        >
          Delete Appointment
        </button>
      </div>
    </Default>
  );
}

export default EditPage;

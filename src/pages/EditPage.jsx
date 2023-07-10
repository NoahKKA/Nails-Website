import Default from "./DefaultPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../SupaBaseClient";

//Makes timeblocks starting from 8am to 6pm in HH:MM
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

function EditPage() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
        setSelectedDate(new Date(data.date));
        setSelectedStartTime(data.startTime);
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

  const handleSaveChanges = async () => {
    try {
      const { error } = await supabase
        .from("appointments")
        .update({
          name: appointment.name,
          date: selectedDate.toISOString().split("T")[0],
          startTime: selectedStartTime,
          endTime: endTime,
        })
        .eq("appointmentId", id);
      if (error) {
        throw error;
      }

      console.log("Appointment updated successfully");
      window.location.href = "/Calendar";
    } catch (err) {
      console.log("Error updating appointment:", err);
    }
  };

  const handleStartTimeChange = (e) => {
    const startTime = e.target.value;
    setSelectedStartTime(startTime);

    // Calculate end time based on start time
    const startTimestamp = new Date(`1970/01/01 ${startTime}`).getTime();
    const endTimestamp = startTimestamp + 4 * 60 * 60 * 1000; // 4 hours
    const endTime = new Date(endTimestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Update appointment data
    setAppointment((prevFormData) => ({
      ...prevFormData,
      startTime,
      endTime,
    }));

    setDropdownVisible(false);
  };

  return (
  //   <Default fixed="bottom" className="bg-green-100">
  //     {appointment.name && (
  //       <div className="d-flex justify-content-center align-items-center mt-20">
  //         <div>
  //           <h2
  //             style={{
  //               fontFamily: "Cormorant Upright serif",
  //               fontWeight: "bolder",
  //             }}
  //           >
  //             Schedule an Appointment
  //           </h2>
  //           <h4>Base fee of $60</h4>
  //           <form className="container mt-5">
  //             <div className="mb-3">
  //               <label htmlFor="name" className="form-label">
  //                 Edit Name:
  //               </label>
  //               <input
  //                 type="text"
  //                 id="name"
  //                 name="name"
  //                 className="form-control"
  //                 placeholder="Enter Name"
  //                 value={appointment.name}
  //                 onChange={(e) =>
  //                   setAppointment((prevAppointment) => ({
  //                     ...prevAppointment,
  //                     name: e.target.value,
  //                   }))
  //                 }
  //                 required
  //               />
  //             </div>

  //             <div className="mb-3">
  //               <label htmlFor="date" className="form-label">
  //                 Edit Date:
  //               </label>
  //               <div className="input-group">
  //                 <input
  //                   type="date"
  //                   id="date"
  //                   name="date"
  //                   className="form-control"
  //                   value={
  //                     selectedDate
  //                       ? selectedDate.toISOString().split("T")[0]
  //                       : ""
  //                   }
  //                   onChange={(e) => setSelectedDate(new Date(e.target.value))}
  //                   required
  //                 />
  //               </div>
  //             </div>

  //             <div className="mb-3">
  //               <label htmlFor="start-time" className="form-label">
  //                 Edit Start Time:
  //               </label>
  //               <div
  //                 className="form-control"
  //                 onClick={() => setDropdownVisible(!dropdownVisible)}
  //               >
  //                 {selectedStartTime || "Select Start Time"}
  //               </div>
  //               {dropdownVisible && (
  //                 <select
  //                   id="start-time"
  //                   name="startTime"
  //                   className="form-control"
  //                   value={selectedStartTime}
  //                   onChange={handleStartTimeChange}
  //                   required
  //                   size={7}
  //                 >
  //                   {timeBlocks.map((block) => (
  //                     <option key={block.value} value={block.value}>
  //                       {block.label}
  //                     </option>
  //                   ))}
  //                 </select>
  //               )}
  //             </div>

  //             <div className="mb-3">
  //               <label htmlFor="end-time" className="form-label">
  //                 End Time:
  //               </label>
  //               <input
  //                 type="text"
  //                 id="end-time"
  //                 name="endTime"
  //                 className="form-control"
  //                 placeholder="End Time"
  //                 value={appointment.endTime}
  //                 readOnly
  //                 required
  //               />
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     )}

  //     <div className="text-center">
  //       <button
  //         onClick={handleDeletedAppointment}
  //         className="btn btn-danger mb-5"
  //       >
  //         Delete Appointment
  //       </button>
  //       <button onClick={handleSaveChanges} className="btn btn-primary mb-5">
  //         Save Changes
  //       </button>
  //     </div>
  //   </Default>
  // );
}

export default EditPage;

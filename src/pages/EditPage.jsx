import Default from "./DefaultPage"
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import { supabase } from "../SupaBaseClient"

function EditPage() {
  const {id} = useParams()
  const [appointment, setAppointment] = useState({})
  console.log(id)
  
  const fetchAppointmentbyId = async () => {
    try {
      const { data, error } = await supabase.from("appointments").select("*").eq("appointmentId", id).single();
      if (error) {
        console.log("Error fetching data:", error.message);
      } else {
        console.log("Fetched data:", data);
        setAppointment(data)
      }
    } catch (err) {
      console.log("Error occurred during data fetching:", err);
    }
  };

  useEffect(() => {
    fetchAppointmentbyId()
  },[])


  const handleDeletedAppointment = async () => {
    try {
        const {error} = await supabase
            .from('appointments')
            .delete()
            .eq("appointmentId", id)
        if(error) {
            throw error
        }

        window.location.href = '/Calendar'
    } catch(err) {
        throw err
    }
  }
  return (
    <Default>
      <button onClick={handleDeletedAppointment} className="btn btn-danger mt-5">Delete Appointment</button>
        {appointment.name && (
        <h2>
      {appointment.name} <br/>
      {appointment.startTime}<br/>
      {appointment.endTime}<br/>
      {appointment.priceEstimate}
      </h2>
      )}
    </Default>
  )
}

export default EditPage

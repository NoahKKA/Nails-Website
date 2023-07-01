import { useState } from "react";
import { supabase } from "../SupaBaseClient";

export default function EmailForm() {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('appointments').select('*');
      if (error) {
        console.log('Error fetching data:', error.message);
      } else {
        console.log('Fetched data:', data);
      }
    } catch (err) {
      console.log('Error occurred during data fetching:', err);
    }
  };
  
  const [appointmentFormData, setAppointmentFormData] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    priceEstimate: 0,
  })

  const createAppointment = async(e) => {
    e.preventDefault()

    try {
        const {data, error} = await supabase
            .from('appointments')
            .insert([appointmentFormData])

        if(error) {
            throw error
        } else {
            console.log("Form Submisson Succesfull.", data)
            fetchData()
        }
    } catch(err) {
        console.log("Error occurred during form submission", err)
    }
  }


  return (
      <div>
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
              onChange={(e) => setAppointmentFormData(prevFormData => ({
                ...prevFormData,
                name: e.target.value
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
              onChange={(e) => {
                const formattedDate = new Date(e.target.value).toISOString().split('T')[0];
                setAppointmentFormData(prevFormData => ({
                  ...prevFormData,
                  date: formattedDate
                }));
              }}   
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="start-time" className="form-label">
              Start Time:
            </label>
            <input
              type="time"
              id="start-time"
              name="startTime"
              className="form-control"
              onChange={(e) => setAppointmentFormData(prevFormData => ({
                ...prevFormData,
                startTime: e.target.value
                }))
              }     
              step='60'
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="end-time" className="form-label">
              End Time:
            </label>
            <input
              type="time"
              id="end-time"
              name="endTime"
              className="form-control"
              onChange={(e) => setAppointmentFormData(prevFormData => ({
                ...prevFormData,
                endTime: e.target.value
                }))
              }     
              step='60'
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
              onChange={(e) => setAppointmentFormData(prevFormData => ({
                ...prevFormData,
                priceEstimate: e.target.value
                }))
              }     
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => createAppointment(e)}>
            Submit
          </button>
        </form>
      </div>
  );
}

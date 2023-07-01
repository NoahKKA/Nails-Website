import { useState } from "react";
import { createClient } from "@supabase/supabase-js"

export default function EmailForm() {
  
  const supabase = createClient(process.env.REACT_APP_DB_URL, process.env.REACT_APP_DB_API)

  const [appointmentFormData, setAppointmentFormData] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    priceEstimate: 0,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const {data, error} = await supabase
            .from('appointments')
            .insert([appointmentFormData])

        if(error) {
            console.log('Form Submitted Unsuccefully!', error.message)
        } else {
            console.log("Form Submisson Succesfull.", data)
        }
    } catch(err) {
        console.log("Error occurred during form submission", err)
    }
  }

  const handleChange = (event) => {
    const { name, value, type, priceEstimate } = event.target;
    const newValue = type === 'number' ? +value : value;

    setAppointmentFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };


  return (
      <div>
        <form action={handleSubmit} className="container mt-12">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={appointmentFormData.name}
              onChange={handleChange}
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
              value={appointmentFormData.date}
              onChange={handleChange}
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
              value={appointmentFormData.startTime}
              onChange={handleChange}
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
              value={appointmentFormData.endTime}
              onChange={handleChange}
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
              value={appointmentFormData.checkbox}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}

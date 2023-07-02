import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from "../SupaBaseClient";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


function Cal1() {
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        fetchAppointments()
    }, [])

    async function fetchAppointments(){
        try {
            const { data, error } = await supabase.from("appointments").select("*");
            if (error) {
              throw error;
            }
      
            const transformedAppointments = data.map(appointment => {
              return {
                title: appointment.name + " Nail's Appointment",
                start: new Date(appointment.date + " " + appointment.startTime),
                end: new Date(appointment.date + " " + appointment.endTime),
                id: appointment.appointmentId
              };
            });
      
            setAllEvents(transformedAppointments);
          } catch (error) {
            console.error("Error fetching appointments:", error);
          }
    }

    const handleEventClick = (e) => {
        console.log(e)
        const { id } = e
        const url = `/appointments/${id}`
        window.location.href = url
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Calendar</h2>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} onSelectEvent={handleEventClick}/>
        </div>
    );
}

export default Cal1;
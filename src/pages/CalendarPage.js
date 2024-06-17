import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarPage = () => (
  <div>
    <h2>Calendar</h2>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "event 1", date: "2024-06-01" },
        { title: "event 2", date: "2024-06-02" },
      ]}
    />
  </div>
);

export default CalendarPage;

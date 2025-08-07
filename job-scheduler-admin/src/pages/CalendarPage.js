import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: 20 }}>
      <h2>Staff Job Calendar</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default CalendarPage;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import moment from "react-moment";

import "./App.css";
import CheckWeek from "./components/CheckWeek";

function App() {
  const [events, setEvents] = useState([
    {
      title: "Event 1",
      start: "2023-05-08T10:00:00",
      end: "2023-05-08T12:00:00",
    },
    {
      title: "Event 2",
      start: "2023-05-09T14:00:00",
      end: "2023-05-09T16:00:00",
    },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const start = event.target.start.value;
    const end = event.target.end.value;

    const newEvent = {
      title,
      start,
      end,
    };

    setEvents([...events, newEvent]);
  }
  // const today = moment().format("YYYY-MM-DD");
  // const from_date = today.startOf("week");
  // const to_date = today.endOf("week");
  // console.log(today, from_date, to_date);
  // console.log({
  //   from_date: from_date.toString(),
  //   today: moment().toString(),
  //   to_date: to_date.toString(),
  // });
  // const week = moment("2021")
  //   .add(16, "weeks")
  //   .startOf("week")
  //   .format("DD MM YYYY");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <input name="start" type="datetime-local" />
        <input name="end" type="datetime-local" />
        <button type="submit">Add Event</button>
      </form>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        // height={"50vh"}
      />
      <CheckWeek />
    </div>
  );
}

export default App;

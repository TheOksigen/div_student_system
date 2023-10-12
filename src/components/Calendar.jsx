//import { Space, Spin } from "antd";
//import { WeeklyCalendar } from "antd-weekly-calendar";
//import { nanoid } from "nanoid";
//import { useEffect, useState } from "react";
//import { Outlet, useNavigate } from "react-router-dom";

//export default function Calendar() {
//  const [time, setTime] = useState([]);
//  const navigate = useNavigate()
//  useEffect(() => {
//    let json = [
//      {
//        startTime: new Date("2023-09-29,12:00:00"),
//        endTime: new Date("2023-09-29,15:00:00"),
//        title: "asdadfasvfs",
//        backgroundColor: "red",
//        key: "1",
//      },
//      {
//        startTime: new Date("2023-09-29,12:00:00"),

//        endTime: new Date("2023-09-29,15:00:00"),
//        title: "asdadfasvfs",
//        backgroundColor: "red",
//        key: '1',
//      }
//    ];
//    setTime(json);
//  }, []);

//  return (
//    <>
//      <div className="h-3/4">
//        <WeeklyCalendar
//          events={time}
//          weekends={true}
//          key={nanoid()}
//          onEventClick={(event) => {
//            console.log(event)
//            navigate("group_table")
//          }}
//        />
//      </div>
//      <Outlet />
//    </>
//  )

//}

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridWeek from '@fullcalendar/timegrid';
import { useNavigate } from 'react-router-dom';

function Calendar() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([]);

  const eventler = [
    {
      id: 'a',
      title: 'FE-119',
      start: "2023-10-12T13:20:21.143Z",
      end: "2023-10-12T15:20:21.143Z",
    }
  ];

  useEffect(() => {
    setEvents(eventler);
  }, []);

  return (
    <div>
      <div className='text-2xl p-3'>Ders Cedveli</div>
      <FullCalendar
        plugins={[timeGridWeek]}
        initialView="timeGridWeek"
        hour12={false}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay',
        }}
        eventClick={() => {
          console.log("Event clicked")
          navigate("group_table")
        }
        }
        events={events}
        eventtimeZone='local'
      //eventTimeFormat={{
      //  month: 'long',
      //  year: 'numeric',
      //  day: 'numeric',
      //  weekday: 'long',
      //  hour12: false
      //}}
      />
    </div>
  );
}
export default Calendar;

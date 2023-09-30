import { Space, Spin } from "antd";
import { WeeklyCalendar } from "antd-weekly-calendar";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Calendar() {
  const [time, setTime] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    let json = [
      {
        startTime: new Date("2023-09-29,12:00:00"),
        endTime: new Date("2023-09-29,15:00:00"),
        title: "asdadfasvfs",
        backgroundColor: "red",
        key: "1",
      },
      {
        startTime: new Date("2023-09-29,12:00:00"),
        
        endTime: new Date("2023-09-29,15:00:00"),
        title: "asdadfasvfs",
        backgroundColor: "red",
        key: '1',
      }
    ];
    setTime(json);
  }, []);

  return (
    <>
      <div className="h-3/4">
        <WeeklyCalendar
          events={time}
          weekends={true}
          key={nanoid()}
          //onSelectDate={(date) => console.log(date)}
          onEventClick={(event) => {
            navigate("group_table")
          }}
        />
      </div>
      <Outlet />
    </>
  )

}

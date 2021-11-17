import React from "react";
import { BsThreeDots } from "react-icons/bs";

const ActivityLog = () => {
  const data = [
    {
      day: "Sun",
      date: "6/9 7:11am",
      name: "Adobe Creative Suite Monthly Plan",
      status: "Paid",
    },
    {
      day: "Fri",
      date: "6/7 1:11am",
      name: "Amazon Premium Card",
      status: "Paid",
    },
    {
      day: "Mon",
      date: "6/6 4:11pm",
      name: "Sent Payment To Client x",
      status: "Paid",
    },
    {
      day: "Thu",
      date: "5/30 9:21pm",
      name: "Change Password",
      status: "Account",
    },
  ];
  return (
    <div className="activity">
      <div className="acitvity__info">
        <h4>Activity Log</h4>
        <BsThreeDots/>
      </div>
      <div className="activity__container">
        {data.map(log => {
          return(
            <div className="transaction">
              <div className="timestamp">
                <h5 >{log.day}</h5>
                <h6 >{log.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="detail">
                <h5>{log.name}</h5>
                <h5>{log.status}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ActivityLog;

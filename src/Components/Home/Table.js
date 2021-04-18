import React from "react";
import "./Table.css";
import Delete from "../../assets/Delete.svg";
function Table(props) {
  const { addData, getData, deleteData, data } = props;
  const [postData, setPostData] = React.useState({
    name: "",
    number: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  return (
    <div className="Table-main">
      <h2>Table</h2>
      <table style={{ width: "100%" }}>
        <tr>
          <th className="heading">Sl no.</th>
          <th className="heading">Meeting name</th>
          <th className="heading">No of People attending</th>
          <th className="heading">Date</th>
          <th className="heading">Start time</th>
          <th className="heading">End time</th>
          <th className="heading">Actions</th>
        </tr>
        {data.map((d, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{d.meetingName}</td>
              <td>{d.numberPeople}</td>
              <td>{d.DateOfMeeting.toString().split("T")[0]}</td>
              <td>{d.startTime}</td>

              <td>{d.endTime}</td>
              <td>
                <img onClick={() => deleteData(d._id)} src={Delete} />
              </td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td>
            <input
              onChange={(e) => {
                setPostData({ ...postData, name: e.target.value });
              }}
              className="inp"
              type="text"
            />
          </td>
          <td>
            <input
              onChange={(e) => {
                setPostData({
                  ...postData,
                  number: parseInt(e.target.value.toString()),
                });
              }}
              className="inp"
              type="text"
            />
          </td>
          <td>
            <input
              onChange={(e) => {
                setPostData({ ...postData, date: e.target.value });
              }}
              className="inp"
              type="date"
            />
          </td>
          <td>
            <input
              onChange={(e) => {
                setPostData({ ...postData, startTime: e.target.value });
              }}
              className="inp"
              type="time"
            />
          </td>
          <td>
            <input
              onChange={(e) => {
                setPostData({ ...postData, endTime: e.target.value });
              }}
              className="inp"
              type="time"
            />
          </td>
          <td>
            <button
              onClick={() => {
                console.log(postData);
                addData(postData);
              }}
              className="button-add"
            >
              Add
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;

import React from "react";
import "./doctortable.css";
import { doctorTableData } from "../../data/data";

const DoctorTableList = () => {
  return (
    <div className="doctorListWrap">
      <div className="doctorTitleWrap">
        <div>
          <h3 className="boxTitle"> Doctor Overview </h3>
        </div>

        <div className="listFilterWrap">
          <div class="searchWrap">
            <input placeholder="Search...." class="navSearch" type="text" />
            <img class="searchIcon" alt="" src="search.png" />
          </div>
          <select name="" className="selectBtn" id="">
            <option value="Heart Surgeon">Heart Surgeon</option>
            <option value="Brain Surgeon">Brain Surgeon</option>
            <option value="Kidney Surgeon">Kidney Surgeon</option>
          </select>

          <select className="selectBtn" name="" id="">
            <option value="12-months">Last 12 Months</option>
            <option value="6-months">Last 6 Months</option>
            <option value="2-months">Last 2 Months</option>
            <option value="1-months">Last 1 Months</option>
          </select>
        </div>
      </div>
      <div className="doctorListContent">
        <table className="doctorTables">
          <thead>
            <tr>
              <th>
                <div>
                  <input type="checkbox" />
                </div>
              </th>
              <th>No</th>
              <th className="nameWidth">Name</th>
              <th>Specialty</th>
              <th>DOB</th>
              <th className="emailWidth">Email Address</th>
              <th className="statusWidth">Status</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorTableData.map((info) => (
              <tr className="tableRow" key={info.id}>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>
                  <div>{info.id}</div>
                </td>
                <td>
                  <div className="docNameWrap">
                    <img
                      src={info.docImg}
                      className="doctorImg"
                      alt={` ${info.name} Image`}
                    />
                    <p className="doctorName">{info.name}</p>
                  </div>
                </td>
                <td>
                  <p>
                    <div>{info.specialist}</div>
                  </p>
                </td>
                <td>
                  <div>{info.date}</div>
                </td>
                <td>
                  <div>{info.email}</div>
                </td>
                <td>
                  <div className="">
                    <p
                      className={
                        info.doctorStatus === "active"
                          ? "activeTab"
                          : "inActiveTab"
                      }
                    >
                      {info.doctorStatus}
                    </p>
                  </div>
                </td>
                <td>
                  <div>{info.contact}</div>
                </td>
                <td>
                  <div className="">
                    <img className="tableAction" src="moreAction.png" alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorTableList;

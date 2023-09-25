import { useState } from "react";

function CVbuidler() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardOpen2, setCardOpen2] = useState(false);

  function openCard() {
    if (cardOpen) {
      setCardOpen(!cardOpen);
    } else if (!cardOpen) {
      setCardOpen(!cardOpen);
    }
  }

  function openCard2() {
    if (cardOpen) {
      setCardOpen2(!cardOpen2);
    } else if (!cardOpen) {
      setCardOpen2(!cardOpen2);
    }
  }

  return (
    <div className="cvbuilder">
      <form className="form" id="personal">
        <h1>Personal Details</h1>

        <label htmlFor="fullName">Full Name:</label>
        <input id="fullName"></input>

        <label htmlFor="email">Email:</label>
        <input id="email"></input>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input id="phoneNumber"></input>

        <label htmlFor="address">Address:</label>
        <input id="address"></input>
      </form>

      <form className="form" id="education">
        <h1>Education</h1>

        {!cardOpen && (
          <p className="arrow" id="arrowdown" onClick={openCard}>
            &darr;
          </p>
        )}

        {cardOpen && (
          <p className="arrow" id="arrowup" onClick={openCard}>
            &uarr;
          </p>
        )}

        {cardOpen && (
          <div className="forms">
            <label htmlFor="school">School:</label>
            <input id="school"></input>

            <label htmlFor="degree">Degree:</label>
            <input id="degree"></input>

            <div className="dates">
              <div className="date">
                <label htmlFor="startDate">Start Date:</label>
                <input id="startDate" type="date"></input>
              </div>

              <div className="date">
                <label htmlFor="endDate">End Date:</label>
                <input id="endDate" type="date"></input>
              </div>
            </div>

            <label htmlFor="location">Location:</label>
            <input id="location"></input>

            <div className="footer">
              <button
                className="btn"
                id="edit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("hi");
                }}
              >
                Edit
              </button>

              <button
                className="btn"
                id="submit"
                onClick={(e) => console.log("nice")}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>

      <form className="form" id="experience">
        <h1>Experience</h1>

        {!cardOpen2 && (
          <p className="arrow" id="arrowdown" onClick={openCard2}>
            &darr;
          </p>
        )}

        {cardOpen2 && (
          <p className="arrow" id="arrowup" onClick={openCard2}>
            &uarr;
          </p>
        )}

        {cardOpen2 && (
          <div className="forms">
            <label htmlFor="company">Institution:</label>
            <input id="company"></input>

            <label htmlFor="title">Job Title:</label>
            <input id="title"></input>

            <div className="dates">
              <div className="date">
                <label htmlFor="startDate">Start Date:</label>
                <input id="startDate" type="date"></input>
              </div>

              <div className="date">
                <label htmlFor="endDate">End Date:</label>
                <input id="endDate" type="date"></input>
              </div>
            </div>

            <label htmlFor="location">Location:</label>
            <input id="location"></input>

            <label htmlFor="desc">Description</label>
            <textarea id="desc"></textarea>

            <div className="footer">
              <button
                className="btn"
                id="edit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("hi");
                }}
              >
                Edit
              </button>

              <button
                className="btn"
                id="submit"
                onClick={(e) => console.log("nice")}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CVbuidler;

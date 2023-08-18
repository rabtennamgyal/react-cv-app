import { useState } from "react";

function CVbuidler() {
  const [cardOpen, setCardOpen] = useState(false);

  // this function opens the card and displays the input fields
  function openCard() {
    setCardOpen(!cardOpen);

    if (cardOpen) {
      document.getElementById('education').style.height = '5rem'
    } else if (!cardOpen) {
      document.getElementById('education').style.height = '40rem'
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
          </div>
        )}
      </form>
    </div>
  );
}

export default CVbuidler;

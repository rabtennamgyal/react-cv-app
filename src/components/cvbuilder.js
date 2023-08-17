function CVbuidler() {
  return (
    <div className="cvbuilder">
      <form className="form" id='personal'>
        <h1>Personal Details</h1>

        <label for="fullName">Full Name:</label>
        <input id="fullName"></input>

        <label for="email">Email:</label>
        <input id="email"></input>

        <label for="phoneNumber">Phone Number:</label>
        <input id="phoneNumber"></input>

        <label for="address">Address:</label>
        <input id="address"></input>
      </form>
    </div>
  );
}

export default CVbuidler;

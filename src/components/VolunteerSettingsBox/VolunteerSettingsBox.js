function VolunteerSettingsBox() {
  return (
    <form className="form-wrapper">
      <h3 className="sub-header">Volunteer Settings Box</h3>
      <div className="fieldset-wrapper">
        <label>Name</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Email</label>
        <input type="email"></input>
      </div>
      <div>
        <label>Availability</label>
        <select name="shifts">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default VolunteerSettingsBox;

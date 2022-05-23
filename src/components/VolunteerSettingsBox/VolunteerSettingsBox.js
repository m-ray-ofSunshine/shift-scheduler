function VolunteerSettingsBox() {
  return (
    <div>
      <h3>Volunteer Settings Box</h3>
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Availability</label>
        <select name="shifts">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default VolunteerSettingsBox;

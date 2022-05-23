function ShiftSettingsBox() {
  return (
    <form className="form-wrapper">
      <h3 className="sub-header">Shift Settings Box</h3>
      <div>
        <label>Date of shift</label>
        <input type="date"></input>
      </div>
      <div>
        <label>Start time</label>
        <input type="time"></input>
      </div>
      <div>
        <label>End time</label>
        <input type="time"></input>
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default ShiftSettingsBox;

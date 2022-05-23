function ShiftSettingsBox() {
  return (
    <div>
      <h3>Shift Settings Box</h3>
      <form>
        <label>Date of shift</label>
        <input type="date"></input>
        <label>Start time</label>
        <input type="time"></input>
        <label>End time</label>
        <input type="time"></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ShiftSettingsBox;

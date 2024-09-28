import { useDatePickerContext } from '../Context/DatePickerProvider';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePickerContext();

 
  const handleFrequencyChange = (e) => {
    setRecurrence({ ...recurrence, frequency: e.target.value });
  };

  const handleIntervalChange = (e) => {
    setRecurrence({ ...recurrence, interval: e.target.value });
  };

  return (
    <div className="recurrence-options">
      <div className="form-group">
        <label htmlFor="frequency">Frequency:</label>
        <select 
          id="frequency" 
          value={recurrence.frequency} 
          onChange={handleFrequencyChange}
          className="recurrence-select"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="interval">Interval (e.g., Every X days/weeks):</label>
        <input 
          id="interval"
          type="number" 
          min="1"
          value={recurrence.interval} 
          onChange={handleIntervalChange} 
          className="recurrence-input"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;

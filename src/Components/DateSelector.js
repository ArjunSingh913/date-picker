
const DateSelector = ({ label, date, setDate }) => {
    return (
      <div className="date-selector">
        <label>{label}</label>
        <input
          type="date"
          value={date ? date.toISOString().substr(0, 10) : ''}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>
    );
  };
  
  export default DateSelector;
  
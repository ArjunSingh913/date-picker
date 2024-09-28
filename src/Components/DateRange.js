import { useDatePickerContext } from '../Context/DatePickerProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePickerContext();

  return (
    <div className="date-range">
      <h3 className="date-range-title">Select Date Range</h3>
      <div className="date-range-picker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="custom-input"
          calendarClassName="custom-calendar"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date (Optional)"
          className="custom-input second-custom-input"
          calendarClassName="custom-calendar"
        />
      </div>
    </div>
  );
};

export default DateRange;

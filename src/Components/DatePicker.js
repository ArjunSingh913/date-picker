import { useState } from 'react';
import { useDatePickerContext } from '../Context/DatePickerProvider';
import RecurrenceOptions from './RecurrenceOptions';
import CalendarPreview from './CalendarPreview';
import DateRange from './DateRange';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const { startDate, setStartDate } = useDatePickerContext();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelection = (date) => {
    setStartDate(date);
    setIsCalendarOpen(false); // Close the calendar after selecting a date
  };

  return (
    <div className='main-container'>
    <div className="date-picker">
   
      <input 
        type="text" 
        placeholder="Select Date" 
        value={startDate ? startDate.toLocaleDateString() : ''} 
        onClick={toggleCalendar} 
        readOnly 
        className="date-input"
      />

      <DateRange />
      <RecurrenceOptions />
      {isCalendarOpen && (
        <CalendarPreview onSelectDate={handleDateSelection} />
      )}
    </div>
    </div>
  );
};

export default DatePicker;

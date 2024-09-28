import { useDatePickerContext } from '../Context/DatePickerProvider';

const CalendarPreview = () => {
  const { startDate, endDate, recurrence } = useDatePickerContext();

  const generateRecurringDates = () => {
    if (!startDate) return [];

    let dates = [];
    let currentDate = new Date(startDate);

    const validEndDate = endDate ? new Date(endDate) : new Date(new Date().setFullYear(currentDate.getFullYear() + 1));

    while (currentDate <= validEndDate) {
      dates.push(new Date(currentDate)); 

     
      if (recurrence.frequency === 'daily') {
        currentDate.setDate(currentDate.getDate() + recurrence.interval);
      } else if (recurrence.frequency === 'weekly') {
        currentDate.setDate(currentDate.getDate() + recurrence.interval * 7);
      } else if (recurrence.frequency === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + recurrence.interval);
      } else if (recurrence.frequency === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + recurrence.interval);
      }
    }

    return dates.filter(date => date >= startDate && date <= validEndDate);
  };

  const recurringDates = generateRecurringDates();

  return (
    <div className="preview-calendar">
    <h4 className="calendar-title">Recurring Dates Preview</h4>
    <ul className="calendar-list">
      {recurringDates.length > 0 ? (
        recurringDates.map((date, index) => (
          <li className="calendar-list-item" key={index}>
            {date.toLocaleDateString()}
          </li>
        ))
      ) : (
        <li className="calendar-list-item">No dates to display</li>
      )}
    </ul>
  </div>
  );
};

export default CalendarPreview;

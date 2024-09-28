import { createContext, useState, useContext } from 'react';

// Create the DatePicker context
const DatePickerContext = createContext();

// Custom hook to use DatePickerContext
export const useDatePickerContext = () => useContext(DatePickerContext);

  export const DatePickerProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily',
    interval: 1, // Every X days/weeks/etc.
    specificDays: [], // For weekly recurrence (e.g., Mon, Tue)
    nthDayOfMonth: null, // For monthly recurrence (e.g., 2nd Tuesday)
  });

  const value = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    recurrence,
    setRecurrence
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

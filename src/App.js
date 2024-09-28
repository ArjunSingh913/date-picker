
import { DatePickerProvider } from './Context/DatePickerProvider';

import DatePicker from './Components/DatePicker';

function App({  pageProps }) {
  return (
    <DatePickerProvider>
  
     <DatePicker {...pageProps} />
    
    </DatePickerProvider>
  );
}

export default App;


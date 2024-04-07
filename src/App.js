
import './App.css';
import Blob from './component/Blob';

import FrontText from './component/FrontText';
import Navbar from './component/Navbar';
import Notify from './component/Notify';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Blob/>
    <FrontText/>
    
    <Notify/>
    </div>
  );
}

export default App;

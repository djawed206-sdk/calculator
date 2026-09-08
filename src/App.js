import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App" style={{minHeight:"100vh",display:'flex',justifyContent:"center",alignItems:"center"}}>
      <Calculator/>
    </div>
  );
}

export default App;
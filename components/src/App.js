import './App.css';
import { Home } from './components/Home';
// import { Department } from './components/Department';
// import { Employee } from './components/Employee';
import { Box } from './components/funCom';

function App() {

  return (
    <>
      <div className='container'>
        <Home/>
        <br />
        <h4>This is Stateless Functional Components</h4>
        <Box />
        {/* <Department/> */}
        {/* <Employee/> */}
      </div>
    </>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmpCreate';
import EmployeeDetails from './EmpDetails'
import EmployeeEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employee/create" element={<EmployeeCreate />}></Route>
          <Route path="/employee/details/:empid" element={<EmployeeDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmployeeEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

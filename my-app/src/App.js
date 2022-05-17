
import './css/App.css';
import TableBootsTrap from './components/BootstratTable/TableBootsTrap';
import LoginForm from './components/BootstrapLoginForm/LoginForm';
import Registration from './components/BootstrapRegistrationForm/Registration';
import NavBarBootsTrap from './components/NavBar/NavBarBootsTrap';
import { useState } from 'react';

function App() {
  const [headerTable, setHeaderTable] = useState([
    { title: '#' },
    { title: 'id' },
    { title: 'email' },
    { title: 'login' },
    { title: 'role' },
  ])
  const [rowsTable, setRowsTable] = useState([
    { id: 1, email: 'email', login: 'login', role: 'role' },
    { id: 2, email: 'email', login: 'login', role: 'role' },
    { id: 3, email: 'email', login: 'login', role: 'role' },
  ])

  return (
    <div className="App">
      <NavBarBootsTrap />
      <TableBootsTrap head={headerTable} rows={rowsTable} />
      <LoginForm />
      <Registration />
    </div>
  );
}

export default App;

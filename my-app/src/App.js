
import './css/App.css';
import TableBootsTrap from './components/BootstratTable/TableBootsTrap';
import LoginForm from './components/BootstrapLoginForm/LoginForm';
import Registration from './components/BootstrapRegistrationForm/Registration';

function App() {
  return (
    <div className="App">
      <TableBootsTrap/>
      <LoginForm/>
      <Registration/>
    </div>
  );
}

export default App;


import './css/App.css';
import SetTable from './components/BootstratTable/SetTable';
import LoginForm from './components/BootstrapLoginForm/LoginForm';
import Registration from './components/BootstrapRegistrationForm/Registration';
import NavBarBootsTrap from './components/NavBar/NavBarBootsTrap';
import SetSearch from './components/SearchForm/SetSearch';
import SetSelect from './components/UI/selects/SetSelect'
import SetModal from './components/Modals/SetModal';


function App() {
  return (
    <div className="App">
      <NavBarBootsTrap />
      <SetSelect />
      <SetSearch />
      <SetModal />
      <SetTable />
      <LoginForm />
      <Registration />
    </div>
  );
}

export default App;

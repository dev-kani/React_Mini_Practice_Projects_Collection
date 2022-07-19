import ContactDetails from './components/ContactDetails'
import TemperatureController from './components/TemperatureController';
import BasicForm from './components/BasicForm';
import BudgetTracker from './components/ReactBudgetTracker/BudgetTracker';

function App() {
  return (
    <>
      <div className="mini-projects-title">React Mini Practice Project Collection</div>

      <div className="mini-apps-container">
        <div className="mini-app">
          <h2 className="project-title">Contact Cards</h2>
          <ContactDetails />
        </div>

        <div className='separator'></div>

        <div className="mini-app">
          <h2 className="project-title">Temperature Controller</h2>
          <TemperatureController />
        </div>

        <div className='separator'></div>

        <div className="mini-app">
          <h2 className="project-title">Basic Form</h2>
          <BasicForm />
        </div>

        <div className='separator'></div>

        <div className="mini-app">
          <h2 className="project-title">React Budget Tracker</h2>
          <BudgetTracker />
        </div>

        <div className='separator'></div>

      </div>



    </>

  );
}

export default App;

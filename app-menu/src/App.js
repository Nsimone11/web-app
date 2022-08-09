import './App.css';
import Chart from './components/Chart';
import Dashboard from './components/Dashboard';
import Deposits from './components/Deposits';
import listItems from './components/listItems';
import Orders from './components/Orders';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Chart></Chart>
      <Dashboard></Dashboard>
      <Deposits></Deposits>
      <listItems></listItems>
      <Orders></Orders>
      <Title></Title>

    </div>
  );
}

export default App;

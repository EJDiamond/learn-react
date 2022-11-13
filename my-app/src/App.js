import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGretting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting='nice to meet you!' name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component" name="Mike"/>
    </div>
  );
}

export default App;

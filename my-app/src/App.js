import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStatesWithArrays from './components/UseStatesWithArrays';
import UseStateWithObjects from './components/UseStatesWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting='nice to meet you!' name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component" name="Mike" />
      <StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Mike" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Mike" />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      <NestingComponents/>
      <MethodsAsPropsParent />
      <RenderingLists/>
      <LifeCyclesCDM/>
      <LifeCyclesCDU />
      <LifeCyclesCWU/>
      <ControlledForm/>
      <UncontrolledForm />
      <SearchBar />
      <ControlledFormHooks/>
      <UseStatesWithArrays/>
      <UseStateWithObjects />
      <UseEffectCounter/>
      <UseEffectCounterContainer/>
      <HTTPRequests/>
      <HTTPPost/> */}
      <HTTPHooks/>



    </div>
  );
}

export default App;

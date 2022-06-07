import React from 'react'
import { Scene } from './components/Scene'
import { ProjectsList } from './components/ProjectsList';
import './App.css'
import { useStoreContext } from './utils/GlobalState'

function App() {
  const [state, dispatch] = useStoreContext();
  return (
    <div className='App'>
      {state.projectsVisible?(<ProjectsList />):''}
      <Scene />  
    </div>
  );
}

export default App;

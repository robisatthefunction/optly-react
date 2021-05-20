import './App.css';
import {OptimizelyExperiment, OptimizelyVariation} from '@optimizely/react-sdk';

function App() {
  return (
    <OptimizelyExperiment experiment="experiment">
      <OptimizelyVariation variation="variation_1">
        variation 1
      </OptimizelyVariation>
      <OptimizelyVariation variation="variation_2">
        variation 2
      </OptimizelyVariation>
    </OptimizelyExperiment>
  );
}

export default App;

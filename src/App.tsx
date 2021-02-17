import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Statistic } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const StatisticExampleStatistic = () => (
  <Statistic inverted color="yellow">
    <Statistic.Value>5,550</Statistic.Value>
    <Statistic.Label>Downloads</Statistic.Label>
  </Statistic>
)

// export default StatisticExampleStatistic

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p>
        <Button primary inverted>Semantic Button</Button>
        <StatisticExampleStatistic />
      </header>
    </div>
  );
}

export default App;

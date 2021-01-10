import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CardList from './components/card-list/card-list.components';
import Candidate from './components/candidate/candidate.component';
import './App.css';

const App = () => {

  const [candidates, setCandidates] = useState();

  const fetchCandidates = async () => {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
    const data = await response.json();
    setCandidates(data);
}
    useEffect(() => {
      fetchCandidates();
    }, []);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <header className="App-header">
            <Route path='/impact-analytics/:id' render={(props) => <Candidate candidates={candidates}/>}/>
            <Route exact path='/impact-analytics' render={(props) => <CardList candidates={candidates}/>}/>
          </header>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './card-list.styles.css';

import { Card } from '../card/card.components';
import SearchBox from '../search-box/search-box.components';


const CardList = ({candidates}) => {

    const [searchField, setSearchField] = useState("");

    let filteredCandidates = [];

    if(candidates){
        filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchField.toLowerCase())
        )
    }

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    return(
    <div>
        <h1>Job Candidates</h1>
        <SearchBox 
          placeholder = 'search candidates'
          handleChange = {e => handleChange(e)}
        />
    <div className='card-list'>{
        filteredCandidates.map(candidate => ( 
            <Card key = {candidate.id}  candidate = {candidate}/>
        ))}
    </div>
    </div>
)};

export default CardList;
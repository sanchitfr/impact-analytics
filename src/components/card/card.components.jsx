import React from 'react';
import './card.styles.css';


export const Card = ({candidate}) => {
    
    const handleClick = (result) => {
        alert(`Candidate has been ${result}`)
    }

    return(
    <div className='card-container'>
        <a href={`/users/${candidate.id}`}>
            <img alt='Candidate' src={candidate.Image}></img>
            <h4>{candidate.name}</h4>
        </a>
            <div>
                <button onClick={e => handleClick("approved")} className='approve'>Approve</button>
                <button onClick={e => handleClick("rejected")} className='reject'>Reject</button>
            </div>
    </div>
)};
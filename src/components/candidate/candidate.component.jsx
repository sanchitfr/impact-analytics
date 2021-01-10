import React from 'react';
import { Link } from 'react-router-dom';

const Candidate = ({candidates}) => {

    const arr = window.location.pathname.split('/');
    const id = arr[arr.length - 1];
    console.log(arr, id)
    let candidate = [];
    if(candidates){
        candidate = candidates.find(candidate => candidate.id === id);
    }
    
    const handleClick = (result) => {
        alert(`Candidate has been ${result}`)
    }

    const {name, Image} = candidate;
    return (
        <div>
            <h2>{name}</h2>
            <Link to='/impact-analytics'>Go back</Link>
            <img style={{height : "50%"}} alt='candidate' src={Image} />
            <div>
                <button onClick={e => handleClick("approved")} className='approve'>Approve</button>
                <button onClick={e => handleClick("rejected")} className='reject'>Reject</button>
            </div>
        </div>
    )
}

export default Candidate;

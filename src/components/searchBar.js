import React, {useState} from "react";

export default function SearchBar(props){
    const [newDate, changeDate] = useState(props.date);
    console.log(props);
    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            props.setDate(newDate)
        }}>
            <label>Date: </label>
            <input type="date" placeholder= "Search..." value={newDate} onChange={e => changeDate(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};
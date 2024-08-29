import React, {useState} from "react";
import {Link} from "react-router-dom";
import chipspic from "./chips.png";
import "./Chips.css";

const Chips = () => {
    const [chips, setChips] = useState([]);

    const getChips = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setChips(items => [...items, {x,y}]);
    };


    return (
        <div className="chips">
           <p>You got {chips.length} bags</p>
           <button onClick={getChips}>More</button>
           <Link to="/">Go Back</Link>
           {chips.map((chip, i) => (
                <img
                    src={chipspic}
                    alt="img"
                    key={i}
                    className="chip-img"
                    style={{top: `${chip.y}px`, left: `${chip.x}px`}}
                />
            ))}
        </div>
    )
}

export default Chips;
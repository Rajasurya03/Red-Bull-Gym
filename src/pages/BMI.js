import "./bmi.css";
import React, { useState } from "react";
import img from '../assets/images/Gym/Banner-img.png'
import Home_card from "../components/Home_card";
import { Home_Banner } from "../components/Home_Banner";
function BMI() {
// state
const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [bmi, setBmi] = useState("");
const [message, setMessage] = useState("");
const pop_cou = [
    {
    title: "Full Body",
    image: img,
    },
    {
    title: "Full Body",
    image: img,
    },
    {
    title: "Full Body",
    image: img,
    },
    {
    title: "Full Body",
    image: img,
    },
];

let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
    alert("Please enter a valid weight and height");
    } else {
    let bmi = (weight / (height * height)) * 703;
    setBmi(bmi.toFixed(1));

    // Logic for message

    if (bmi < 25) {
        setMessage("You are underweight");
    } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
    } else {
        setMessage("You are overweight");
    }
    }
};

let reload = () => {
    window.location.reload();
};

return (
    <div className="app">
    <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
        <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div>
            <label>Height (in)</label>
            <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            />
        </div>

        <div>
            <button className="btn" type="submit">
            Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
            </button>
        </div>
        </form>
        <div className="center">
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
        </div>
    </div>
    {/* <Home_Banner/>
    <h2>popular Courses</h2>
    <Home_card list={pop_cou} />
    <button>Learn More</button> */}
    </div>
);
}

export default BMI;

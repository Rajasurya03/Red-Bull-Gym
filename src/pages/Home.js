import React from "react";
import { Home_Header } from "../components/Home_Header";
import Home_card from "../components/Home_card";
import img1 from "../assets/images/Gym_Machine/Im1.jpg";
import img2 from "../assets/images/Gym_Machine/Im2.jpg";
import img3 from "../assets/images/Gym_Machine/Im3.jpg";
import img4 from "../assets/images/Gym_Machine/Im4.jpg";
import img5 from "../assets/images/Gym_Machine/Im5.jpg";
import img6 from "../assets/images/Gym_Machine/Im6.jpg";
import img7 from "../assets/images/Gym_Machine/Im7.jpg";
import img8 from "../assets/images/Gym_Machine/Im8.jpg";
import img9 from "../assets/images/Gym/img7.jpg";
import img10 from "../assets/images/Gym/im11.jpg";
import img11 from "../assets/images/Gym/im12.jpg";
import img12 from "../assets/images/Gym/im9.jpg";
import imgf from "../assets/images/Gym/Family.jpg";
import { Home_Banner } from "../components/Home_Banner";
import Home_Card_txt from "../components/Home_Card_txt";
import "../components/Home.css";
import { About } from "../components/About";
function Home() {
    const list = [
        {
        title: "Dumbbell Workout",
        image: img1,
        },
        {
        title: "Kettlebell Workouts",
        image: img2,
        },
        {
        title: "Weight Lift",
        image: img3,
        },
        {
        title: "Treadmill",
        image: img4,
        },
        {
        title: "Power Hypertrophy Upper Lower",
        image: img5,
        },
        {
        title: "Pull-Up Bar",
        image: img6,
        },
        {
        title: "Leg Press",
        image: img7,
        },
        {
        title: "Chest Press",
        image: img8,
        },
    ];
    const txt = [
        {
        title: "₹250/-",
        txt: "1 month",
        },
        {
        title: "₹450/-",
        txt: "3 month",
        },
        {
        title: "₹800/-",
        txt: "6 month",
        },
        {
        title: "₹1500/-",
        txt: "12 month",
        },
    ];
    const pop_cou = [
        {
        title: "Digital Transformation",
        image: img9,
        },
        {
        title: "Full Body Workout",
        image: img10,
        },
        {
        title: "Weight Loss",
        image: img11,
        },
        {
        title: "Weight Gain",
        image: img12,
        },
    ];
    return (
        <>
        <div id="home">
            <Home_Header />
            <h4 className="section-m1">Manual Workout</h4>
            <h2>Equipments in GYM</h2>
            <Home_card list={list} />
            <h4 className="section-m1">Offers Available</h4>
            <h2>
            Up to <span>20% Off</span> - For all plans
            </h2>
            <Home_Card_txt txt={txt} />
            <h2 className="section-p1">
            For more details contact <span>@Red-Bull-GYM</span>
            </h2>
            <button className="section-m2 normal">Contact</button>
            <Home_Banner />
            <h4 className="section-m1">Special Training</h4>
            <h2 className="section-m1">Popular Courses</h2>
            <Home_card list={pop_cou} />
            <h2>Red Bull</h2>
            <About />
            <h2 className="section-m1">Our Family - <span>Gallery</span></h2>
            <img className="img" src={imgf} alt="Gallery" />
        </div>
        </>
    );
}

export default Home;

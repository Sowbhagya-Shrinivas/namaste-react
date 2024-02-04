import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Call for every component changes - NAMASTE REACT")
        },1000);
        console.log("useEffect");
        //this function will call while unmounting
        return(()=>{
            clearInterval(timer);
            console.log("useEffect return");
        })
    },[]);
    console.log("render");

    return(
        <div className="user-card">
            <h1>count : {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count Increase</button>
            <h2>Name : {name}</h2>
            <h3>Location : Mysore</h3>
            <h4>Contact : sowbhagya@gmail.com</h4>
        </div>
    );
}

export default User;
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * 1. Header Component
 *    - Logo
 *    - Nav Items
 * 2. Body Component
 *    - Search
 *    - RestaurantContainer
 *       - RestaurantCard
 *       - Image
 *       - Name Of Restaurant, Start Rating, cuisins,delivery tie
 * 3. Footer
 *     - Copyright
 *     - Links
 *     - Address
 *     - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart" src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/></li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = (props) => {
    const {resName,cusins,rating,eta} = props;
    return(
        <div className="rest-card">
            <img className="res-logo"
            alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/27238ee4292d42c7b705f2ce8671ff80"/>
            <h3>{resName}</h3>
            <h4>{cusins}</h4>
            <h4>{rating}stars</h4>
            <h4> {eta}</h4>
        </div>
    );
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                <RestaurantCard resName="CallMeChow" cusins="Chowmin,Chinese Foods" rating="4.4" eta="38 minutes"/>
                <RestaurantCard resName="MeghanaFoods" cusins="Biriyani,SouthIndian" rating="4.8" eta="30 minutes"/>
            </div>
        </div>
    )
}
const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
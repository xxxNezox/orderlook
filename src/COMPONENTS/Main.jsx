import React, { Component } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import NavBarMain from "./NavBarMain";
import About from "./About";

class Main extends Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(window.location.search);
    const restaurantName = searchParams.get("restaurantName");
    const isAdmin = searchParams.get("isAdmin");

    this.state = {
      restaurantName,
      isAdmin,
      aboutData: null, 
      menuData: null, 
      ordersData: null
    };
  }

  componentDidMount() {
    fetch(`/api/getdata?restaurantName=${this.state.restaurantName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then((jsonData) => {
            this.setState({
                aboutData: jsonData.aboutData, 
                menuData: jsonData.menuData, 
                ordersData: jsonData.ordersData
            })
            console.log(this.state)
            console.log(jsonData)
        })
        .catch((error) => {
            console.log('Error fetching data:', error);
        });
  }

  render() {
    const { restaurantName, isAdmin, aboutData, menuData, ordersData } = this.state;

    return (
      <div>
        <NavBarMain name={restaurantName} status={isAdmin} />  
        <Routes>
                <Route path="/about" element={<About data={aboutData}/>} />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default Main;

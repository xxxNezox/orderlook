import React, { Component } from "react";

class Main extends Component {
  render() {
    const searchParams = new URLSearchParams(window.location.search);
    const restaurantName = searchParams.get("restaurantName");
    const isAdmin = searchParams.get("isAdmin");

    return (
      <div>
        <h1>Page</h1>
        <p>Restaurant Name: {restaurantName}</p>
        <p>Is Admin: {isAdmin}</p>
      </div>
    );
  }
}

export default Main;

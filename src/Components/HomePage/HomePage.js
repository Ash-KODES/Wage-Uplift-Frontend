import React, { Component } from "react";
import Navbar from "./Sections/Navbar";
import Banner from "./Sections/Banner";
import KnowAbout from "./Sections/KnowAbout";
import JobSeeker from "./Sections/JobSeeker";
import Employer from "./Sections/Employer";
// it means a class named homepage is created whose parent class is component
class HomePage extends Component {
  // render is method in Homepage class component
  // A class component must include the extends React.Component statement.
  //  This statement creates an inheritance to React.Component, 
  // and gives your component access to React.Component's functions.

// render means to present something after execution()
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <KnowAbout />
        <JobSeeker />
        <Employer />
      </div>
    );
  }
}

export default HomePage;

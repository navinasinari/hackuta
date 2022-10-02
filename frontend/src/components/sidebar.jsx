import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { Router, Route } from "react-router-dom";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./sidebar.css";
import { FaHome, IoMdContact } from "react-icons/fa";

const Sidebar = (props) => {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <FaHome />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>About</NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            {/* <IoIosContact/> */}
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Contact Us</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>

    //     <Router>
    //     <Route render={({ location, history }) => (
    //         <React.Fragment>
    //             <SideNav
    //                 onSelect={(selected) => {
    //                     const to = '/' + selected;
    //                     if (location.pathname !== to) {
    //                         history.push(to);
    //                     }
    //                 }}
    //             >
    //                 <SideNav.Toggle />
    //                 <SideNav.Nav defaultSelected="home">
    //                     <NavItem eventKey="home">
    //                         <NavIcon>
    //                             <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
    //                         </NavIcon>
    //                         <NavText>
    //                             Home
    //                         </NavText>
    //                     </NavItem>
    //                     <NavItem eventKey="devices">
    //                         <NavIcon>
    //                             <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
    //                         </NavIcon>
    //                         <NavText>
    //                             Devices
    //                         </NavText>
    //                     </NavItem>
    //                 </SideNav.Nav>
    //             </SideNav>
    //             <main>
    //                 {/* <Route path="/" exact component={props => <RootComponent />} /> */}
    //                 <Route path="/home" component={props => <Homepage />} />
    //                 {/* <Route path="/devices" component={props => <Devices />} /> */}
    //             </main>
    //         </React.Fragment>
    //     )}
    //     />
    // </Router>
  );
};

export default Sidebar;

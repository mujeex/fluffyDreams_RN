import React, { Component } from 'react';
import { StatusBar} from "react-native"


import Screens from "../Components/OnboardinComp/screen"


export default class Onboarding extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true,
    // navBarTranslucent: true
  };
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Screens />
    );
  }
}
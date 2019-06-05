import React, { Component } from 'react';
import {View, Text,StyleSheet} from "react-native"
import CarouselPager from "react-native-carousel-pager"
import Content from "../Components/newScreenComp/content"



export default class NewsScreen extends Component {

  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true,
    // navBarTranslucent: true
  };

  onClickSomething() {
    this.carousel.goToPage(2);
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <CarouselPager pageStyle={pageStyles} containerPadding={20} ref={ref => this.carousel = ref} initialPage={2} pageStyle={{backgroundColor: '#f7efed'}}>
          <View onPress={()=> this.onClickSomething()} key={'page0'}>
          <Content uri ={require('../Assets/birthday-birthday-cake-cake-140831.jpg')} subtitle="Delivery"/> 
          </View> 
          <View key={'page1'}> <Content uri ={require('../Assets/berries-cake-cheesecake-85766.jpg')} subtitle="Promotion"/> </View>
          <View key={'page2'}> <Content uri ={require('../Assets/berry-blackberry-blueberry-315707.jpg')} subtitle="Challenge!"/> </View>
          <View key={'page3'}> <Content uri ={require('../Assets/blur-cake-cheesecake-219293.jpg')} subtitle="Special Offer"/> </View>
        </CarouselPager>
      </View>
    );
  }
}

const pageStyles={
borderWidth: 1,
borderColor: 'red'
}

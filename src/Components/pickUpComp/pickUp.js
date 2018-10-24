import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

 class PickUp extends Component {

  render() {
    return (
      <View style={this.props.bodyStyle}>
        <View style={styles.bakery}>
            <Text style={styles.labels}>Bakery</Text>
            <Text style={styles.bold}>No 5 Tukur Road</Text>
        </View>

        <View style={styles.openingHoursContainer}>
            <Text style={styles.labels}>Opening Hours</Text>
            <View style={styles.openingHours}>
                <Text style={styles.bold}>Mon-Fri: 9:00 - 20:00</Text>
                <Text style={styles.bold}>Sat-Sun: 11:00 - 22:00</Text>
            </View>
        </View>

        <View style={styles.phone}>
        <Text style={styles.labels}>Phone Number</Text>
        <Text style={styles.bold}>(862)15140221630</Text>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    bakery:{
        marginTop: 10,
        marginLeft: 10,
    },
    openingHoursContainer:{
        marginTop: 10,
        marginLeft: 10,
    },
    openingHours:{
        // fontSize: 25,
    },
    phone:{
        marginTop: 10,
        marginLeft: 10,
    },
    labels:{
        fontSize: 12,
        color: 'gray'
    },
    bold:{
        fontSize: 20
    }
})

export default PickUp
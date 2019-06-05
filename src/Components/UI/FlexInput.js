import React  from 'react'
import {TextInput, StyleSheet} from 'react-native'

const flexibleInput = (props) => (
    <TextInput
    {...props}
    style={[styles.input,props.Style,props.focus?styles.focused:styles.noFocus]}
    />
)

const styles= StyleSheet.create({
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#85A9CD",
        padding: 10,
        // marginTop: 8,
        // marginBottom: 8,

      },
      focused:{
        borderColor: "#0A539B",
        borderBottomWidth: 2
      },
      noFocus:{
        borderColor: "#0A539B",
        borderBottomWidth: 1,
      },
      // valid:{
      //   borderBottomColor: "#0A539B",
      //   borderBottomWidth: 0.5,
      // }
})

export default flexibleInput
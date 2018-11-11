import React  from 'react'
import {TextInput, StyleSheet} from 'react-native'

const flexibleInput = (props) => (
    <TextInput
    {...props}
    style={[styles.input,props.focus?styles.focused:styles.noFocus]}
    />
)

const styles= StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
      },
      focused:{
        borderColor: 'red',
        borderWidth: 0.5
      },
      noFocus:{
        borderColor: '#eee',
        borderWidth: 0.5,
      }
})

export default flexibleInput
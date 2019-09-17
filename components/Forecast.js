import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
export default class Forecast extends React.Component {
 render() {
 return (
    <View style={styles.text}>
    <Text style={styles.font}>{this.props.main}</Text>
    <Text style={styles.font}>{this.props.description}</Text>
    <Text style={styles.font}>{this.props.temp}</Text>
    <Text style={styles.font}>°C</Text>
    </View>
 );
 }
}
const styles = StyleSheet.create({
    text: { textAlign: 'center',alignItems: 'center',paddingRight:30},
    font:{fontSize: 30,textAlign: 'center',fontWeight: 'bold',color: 'white',paddingTop:20},
});
import React from 'react';
import { StyleSheet,Text, View,Button } from 'react-native';
import Weather from './Weather';
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
        headerTitle: (<Text>Weather</Text>),
        headerRight: (
        <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}/>
        )
        }
       }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode}/>);
       }
       
    }
   
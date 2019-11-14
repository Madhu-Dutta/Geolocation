import React from 'react';
import './App.css';
import {geolocated} from 'react-geolocated';
import Geoloc from './Geoloc';

class App extends React.Component{
  render(props){
  return (
     <div>
        <h1>Hello world!</h1>
        <p>{this.props.coords && this.props.coords.latitude}</p>
        <Geoloc {...this.props} />
    </div>
  );
}
}
const MainWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(App);

export default MainWithGeoloc;

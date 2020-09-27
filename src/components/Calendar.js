import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        date: new Date(),
        cityName:'',
        temperature:'',
        cloudcover:'',
        humidity:'',
        pressure:'',
        visibility:''
      };
    };
handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
        cityName:e.target.value
    })
}
handleClick = (name) =>{
    console.log(name)
    // e.preventDefault()
    axios({
        "method":"GET",
        "url":"http://api.weatherstack.com/current?access_key=e972f0185596145f6b937cb18713ada5&query=name"
      
        })
        .then((response)=>{
          console.log(response.data.current.temperature)
          console.log(response)
          this.setState({
            temperature:response.data.current.temperature,
            humidity:response.data.current.humidity,
            cloudcover:response.data.current.cloudcover ,
            pressure:response.data.current.pressure ,
            visibility:response.data.current.visibility
          })
        })
        .catch((error)=>{
          console.log(error)
        })
}
// handleDate = (date) => {
// console.log(date)
// this.setState({date})
// axios({
//     "method":"GET",
//     "url":"http://api.weatherstack.com/current?access_key=e972f0185596145f6b937cb18713ada5&query={this.state.cityName}"
  
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
// }
  render() {
      console.log(this.state)
    return (
        
    <div class="row">
    <div class="col s12 m12">
    <div class="input-field col s6">
          <input placeholder="Placeholder" name="cityName" type="text"  class="validate" onChange={this.handleChange}/>
          <label for="city_name"><h6>City Name</h6></label>
        </div><br></br>
          <a class="waves-effect waves-light btn"  onClick={()=>this.handleClick(this.state.cityName)}><i class="material-icons right">cloud</i>button</a>  
          <br></br>
      <div class="card-panel teal">
        <span class="white-text">
        </span>
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Current Weather</span>
          <i class="large material-icons">cloud_queue
</i>
<h4>Temperature : {this.state.temperature}</h4>
<h4>Cloud Cover : {this.state.cloudcover}</h4>
<h4>Pressure : {this.state.pressure}</h4>
<h4>Humidity : {this.state.humidity}</h4>
<h4>Visibility : {this.state.visibility}</h4>
        </div>
        </div>
      </div>
    </div>
  </div>
    
    );
  }
}

export default componentName;

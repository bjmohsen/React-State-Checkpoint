
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
 state={
  person:{
    name:'mohsen',
    bio:'undefined',
    img:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    profession:'undefined'
  },
  show : true ,
  time :0 
 };

 componentDidMount() {
  
    setInterval(() =>{
      this.setState({time:this.state.time +1 })
  }, 1000);}






 //fonction qui bascule l'état d'affichage
 handleCklik=()=>{
  
    //console.log(this.state.person);
    console.log(this.state.show);
  this.state.show===false ? this.setState({show:true}):this.setState({show:false})
  
};






 render (){
return (
  <div >
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
<button onClick={this.handleCklik}>clickme</button>
{
   this.state.show&&(
      <div>
        <p><h1>{this.state.person.name}</h1></p>
        <p>{this.state.person.bio}</p>
        <p>{this.state.person.profession}</p>
        <img src={this.state.person.img} alt='image' className='image'/>
        </div>
      
    )}


<p>Temps  : {this.state.time}</p>



</Card.Body>
</Card>
</div>
)

}}

export default App;
import React,{useState} from 'react';
import './App.css';
import Store from './Store';
import {Restaurant} from "./model/restaurant"


let data:Restaurant = {
  name : '한식당',
  category:"korean",
  address : {
    city:"incheon",
    detail:"somewhere",
    zipCode:12345
  },
  menu:[{name:"pasta",price:2000,category:"PASTA"},{name:"steak",price:5000,category:"MEAT"}]
}
const App:React.FC = () => {
  const [myRestaurant,setMyRestaurant] = useState<Restaurant>(data)
  return (
    <div className="App">
      <Store info={myRestaurant}/>
    </div>
  );
}

export default App;

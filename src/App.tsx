import React,{useState} from 'react';
import './App.css';
import Store from './Store';
import {Address,Restaurant} from "./model/restaurant"
import BestMenu from './BestMenu';


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
  
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant,address:address})
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="Bpizza" category="pizza" price={1000} />
    </div>
  );
}

export default App;

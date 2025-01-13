import { Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Shop from './routes/shop/Shop.jsx';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';



const App = () => {
  return (


  
    
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route path='home' element ={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
    
      <Route path='auth' element={<Authentication/>}/>
    
    </Route>

    </Routes>
   
    // Do routing and outlet part again 
    // routing here
    // routes
    // /-> hiome 
    // /shop -> shop component
    // /auth -> authentication component
    // and then find out where you can fit outlet
  );
};

export default App;
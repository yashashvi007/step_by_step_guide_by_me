import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

// this step is not about you doing anything, first i want you to understand 
// how context api works, it's really really important
// follow this video 
// https://www.youtube.com/watch?v=Z7VSgQ_y0dg
// then once you get hold of it try to understand the user context and how i'm using that
// meet you in next step😁.

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
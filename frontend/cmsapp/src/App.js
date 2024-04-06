import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './Header'; // Assuming you have a Header component
import Home from './Home'; // Import the Home component
import Weddings from './Weddings';
import Birthdays from './Birthdays';
import ImageHandle from './components/ImageHandle';
import BabyShower from './Babys';
import CollegeFest from './College';
import Corporate from './Corporate';
import School from './School';

function App() {
  return (

    

    <BrowserRouter>
   
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cmsPage' element={<ImageHandle />} />
        <Route path="/weddings" element={<Weddings />}/>
        <Route path="/birthdays" element={<Birthdays />}/>
        <Route path="/babyshower" element={<BabyShower />}/>
        <Route path="/collegefest" element={<CollegeFest />}/>
        <Route path="/corporateevent" element={<Corporate />}/>
        <Route path="/schoolevent" element={<School />}/>
        </Routes>
 
   </BrowserRouter>
  );
}

export default App;

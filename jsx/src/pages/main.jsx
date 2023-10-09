import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './home';
import Menu from './menu';
// import DetailEndowUI from './layout/detailEndowUI';
// import EndowUI from './layout/endowUI';
import Endow from './endow';
// import DetailEndow from './detailEndow';
const Main = () =>
{
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={ <Home /> } />
                {/* <Route path="/detailendow" element={ <DetailEndow /> } /> */}
                <Route exact path="/" element={Endow} />
                {/* <Route path=":userId" element={<Home/>}/> */ }
                
            </Routes>
        </>
    );
};

export default Main;
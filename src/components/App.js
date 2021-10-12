import React from "react";
import GlobalStyles from "./Assets/GlobalStyles";
import Navbar from "./Navbar";
import SliderMain from "./SliderMain";


function App() {

    console.log('выполнился рендер!!!')

    return (
        <>

            <GlobalStyles/>
            <Navbar/>
            <SliderMain/>
        </>
    );
}

export default App;


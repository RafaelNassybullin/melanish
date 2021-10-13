import React from "react";
import GlobalStyles from "./Assets/GlobalStyles";
import Navbar from "./Navbar";
import SliderMain from "./SliderMain";
// import useWindowSize from "@rooks/use-window-size";

function App() {


    console.log('выполнился рендер!!!')

    return (
        <>
            {/*{w.innerWidth}*/}
            <GlobalStyles/>
            <Navbar w/>
            <SliderMain/>
        </>
    );
}

export default App;


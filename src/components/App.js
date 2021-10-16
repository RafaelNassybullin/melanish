import React from "react";
import GlobalStyles from "./Assets/GlobalStyles";
import Navbar from "./Navbar";
import SliderMain from "./SliderMain";


function App() {

    console.log('выполнился рендер!!!')

    return (
        <>
            {/*сделать переключатель темы с заменой изображений REDUX, добавить компонент LAZYLOADING*/}
            <GlobalStyles/>
            <Navbar w/>
            <SliderMain/>
        </>
    );
}

export default App;


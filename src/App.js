import React, {useState} from 'react'

import CustomDrawer from "./components/navigation/CustomDrawer";

const App = (props) => {

    return (
        <>
            <CustomDrawer>{props.children}</CustomDrawer>
        </>
    )
}

export default App;

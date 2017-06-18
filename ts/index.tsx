import * as React from "react";
import * as ReactDom from "react-dom";

let Jagadeesh=()=>{
    return <div>
        <Hari/>
        <h1>Jagadeeshkorikana</h1>
    </div>
}

let Hari=()=>{
    return <div>
        <h2>Hari Krishna</h2>
    </div>
}

ReactDom.render(<Jagadeesh/>,document.getElementById("DemoApp"));
import * as React from "react";
import * as ReactDom from "react-dom";
interface IProps {};
interface IState {};
let Jagadeesh=()=>{
    return <div>
        <Hari/>
        <h1>Footerone</h1>
    </div>
}

let Hari=()=>{
    return <div>
        <h2>Footertwo</h2>
    </div>
}

class DemoApp extends React.Component<IProps, IState> {
    render()
    {
        return (
        <div>
            <h2>Task: Simple Rendering</h2>
            <Header/>
            <Content/>
            <Jagadeesh/>
        </div>
        );
    }
}

class Header extends React.Component<IProps, IState>{
    render()
    {
        return (
            <div>
                <h1>Heading</h1>
            </div>
        );
    }
}

class Content extends React.Component<IProps, IState>{
    render()
    {
        return(
            <div>
                <h2>Content Area</h2>
            </div>
        );
    }
}
//export default DemoApp;

ReactDom.render(
	<DemoApp />, document.getElementById("DemoApp")
)
import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface IProps {};
interface IState {};
class Todos extends React.Component<IProps, IState> {
	constructor() {
		super();
	}
	render() {
		return <div>
			<h2>Task:Sample React template</h2>
		</div>;
	}
}
ReactDOM.render(<Todos />, document.getElementById("DemoApp"))
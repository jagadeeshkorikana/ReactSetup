import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
	string: string;
	number: number;
};
interface IState {};

let Component: React.StatelessComponent<IProps> = (props)=>{
	return <div>
		String: {props.string},
		Number: {props.number}
	</div>
}

class ComponentS extends React.Component<IProps, null> {
	render(){
		return <div>
		String: {this.props.string},
		Number: {this.props.number}
	</div>
	}
}

ReactDOM.render (<ComponentS string="String State full" number={100}/>, document.getElementById("app"))
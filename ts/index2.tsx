import * as React from "react";
import * as ReactDom from "react-dom";
interface IProps{}
interface IState{
    todos_list:any[]
};
class Todos extends React.Component<IProps, IState> {
    inputtext:any;
    public listItems:any;
    constructor(){
        super();
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.state={
            todos_list:[]
        }
    }
    addTodo(event1:any){
        event1.preventDefault();
        this.setState({
            todos_list:[...this.state.todos_list,this.inputtext.value]
        });
        this.inputtext.value="";
    }
    deleteTodo(event2:any){
        let todos_list = this.state.todos_list;
        console.log(todos_list);
        this.setState({
           todos_list:todos_list.map((todoitem:string)=>{
                    if(todoitem!="aaa"){return true; }
                    else {return false;}
               }
           )
        });
    }


    render(){
        let todos = this.state.todos_list;
		let todosDisplay = todos.map((todo, i)=>{
			return <li key={i}>{todo}</li>;
		});
        return <div>
            <form onSubmit={this.addTodo}>
                <input type="text" ref={(input)=>{
                        this.inputtext=input;
                }}/>
                <input type="button" value="click" onClick={this.deleteTodo}/>
            </form>
            <ul>
           {todosDisplay}
			</ul>
        </div>
    }
}
ReactDom.render(<Todos />, document.getElementById("DemoApp"));
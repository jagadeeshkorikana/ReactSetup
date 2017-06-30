import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface IProps {};
interface IState {
    todos_list:{
        todo_text:string,
        todo_id:number
    }[]
};
class Todos extends React.Component<IProps, IState> {
    inputtext:any;
    todos_id=0;
	constructor() {
		super();
        this.state={
            todos_list:[]
        }
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
    }
    addTodo(eventone:any){
        eventone.preventDefault();
        this.setState({
            todos_list:[...this.state.todos_list,{
                todo_text:this.inputtext.value,todo_id:this.todos_id++
            }]
        });
        this.inputtext.value="";
    }
    deleteTodo(id:number){
        this.setState({
            todos_list:this.state.todos_list.filter((todo)=>{
                if(todo.todo_id==id){return false;}
                else return true;
            })
        });
    }
	render() {
        let todos = this.state.todos_list;
		let todosDisplay = todos.map((todo,i)=>{
			return <li key={i}><span onClick={()=>{this.deleteTodo(todo.todo_id)}}>X</span>{todo.todo_text}</li>;
		});
		return <div>
          <h2>Task: Add Todo and Deleted Todo</h2>
            <form onSubmit={this.addTodo}>
                <input type="text" ref={(input)=>{
                        this.inputtext=input;
                }}/>
            </form>
            <ul>
           {todosDisplay}
			</ul>
		</div>;
	}
}
ReactDOM.render(<Todos />, document.getElementById("DemoApp"))
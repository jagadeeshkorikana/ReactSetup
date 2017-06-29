import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface IProps {};
interface IState {
    todos_list:{
        todo_text:string,
        todo_id:number,
        todo_status:string
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
        this.toggleTodo=this.toggleTodo.bind(this);
        this.itemsCompleted=this.itemsCompleted.bind(this);
    }
    addTodo(eventone:any){
        eventone.preventDefault();
        this.setState({
            todos_list:[...this.state.todos_list,{
                todo_text:this.inputtext.value,todo_id:this.todos_id++,todo_status:"ACTIVE"
            }]
        });
        this.inputtext.value="";
    }
    deleteTodo(eventone:any,id:number){
        eventone.stopPropagation();
        this.setState({
            todos_list:this.state.todos_list.filter((todo)=>{
                if(todo.todo_id==id){return false;}
                else return true;
            })
        });
    }
    toggleTodo(todos_id: number){
        this.setState({
            todos_list:this.state.todos_list.filter((todoitem)=>{
                //console.log(todoitem.todo_status);
                if(todoitem.todo_id==todos_id)
                todoitem.todo_status=(todoitem.todo_status=="ACTIVE")?"COMPLETED":"ACTIVE";
                return true;
            })
        })
    }
    itemsCompleted(){
        this.setState({
            todos_list:this.state.todos_list.filter((todoitem)=>{
                //console.log(todoitem.todo_status);
                return todoitem.todo_status=="COMPLETED"?true:false;
            })
        })
    }
	render() {
        let todos = this.state.todos_list;
		let todosDisplay = todos.map((todo,i)=>{
			return <li key={i} style={{textDecoration:(todo.todo_status=="ACTIVE")?"none":"line-through"}}  onClick={()=>{this.toggleTodo(todo.todo_id)}}><span onClick={(eventone)=>{this.deleteTodo(eventone,todo.todo_id)}}>X</span>{todo.todo_text}</li>;
		});
		return <div>
          <h2>Task: Filter Todo</h2>
            <form onSubmit={this.addTodo}>
                <input type="text" ref={(input)=>{
                        this.inputtext=input;
                }}/>
            </form>
            <ul>
           {todosDisplay}
			</ul>
            <span onClick={()=>{this.itemsCompleted()}}>COMPLETED</span>
		</div>;
	}
}
ReactDOM.render(<Todos />, document.getElementById("DemoApp"))
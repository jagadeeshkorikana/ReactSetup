interface IState {
    todos: {
        id: number,
        text: string,
        status: "COMPLETE"|"ACTIVE"
    }[]
};

let Reducer = (state: IState, action: any): IState => {
    switch(action.type) {
        case "ADD_TODO": {

        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((todoitem)=>{
                    if (todoitem.id==action.id) return false;
                    return true;
                })
            };
        }
        case "TOGGLE_TODO": {
            return {
                ...state,
                todos: state.todos.map((todoitem)=>{
                    if(todoitem.id==action.id)
                    {
                        todoitem.status=todoitem.status=="COMPLETE"?"ACTIVE":"COMPLETE";
                    }
                    return todoitem;
                })
            }
        }
    }
    return state;
};
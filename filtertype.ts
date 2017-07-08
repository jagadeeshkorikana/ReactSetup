interface Todo {
    id:number,
    text:string,
    status: "COMPLETE"|"ACTIVE"
};

interface Todos{
    todos: Todo[]
}

let todos: Todos;

let filter = (filter: "all"|"complete"|"active") => {
    switch(filter){
        case "all":
            console.log(todos.todos.map((todoobj)=>{
                return todoobj;
            }))
            break;
        case "complete":
            console.log(todos.todos.map((todoobj)=>{
                if(todoobj.status=='COMPLETE'){return todoobj;}
            }))
            break;
        case "active":
            console.log(todos.todos.map((todoobj)=>{
                if(todoobj.status=='ACTIVE'){return todoobj}
            }))

    }
}

let Toggle = (id: number) => {
    console.log(todos.todos.map((todoitem)=>{
        if(todoitem.id==id){todoitem.status=todoitem.status=="COMPLETE"?"ACTIVE":"COMPLETE";}
        return todoitem;
    }))
}

let Delete = (id: number) => {
    console.log(todos.todos.filter((todoitem)=>{
        if(todoitem.id==id){return false;}
        return true;
    }))
}
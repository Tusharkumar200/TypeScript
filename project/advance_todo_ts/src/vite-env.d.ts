/// <reference types="vite/client" />

type TodoItemType = {
    id: string;
    title : string;
    isCompleted : boolean;
}

type PropsType ={
    todo: TodoItemType;
};

const TodoItem = ({todo}: PropsType) => {
    todo.id,
    todo.title,
    todo.isCompleted
};

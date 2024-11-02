import { AppBar, Button, Container, Stack,  TextField, Toolbar, Typography } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: "1", title: "Learn React", isCompleted: false },
    { id: "2", title: "Learn TypeScript", isCompleted: false },
    { id: "3", title: "Learn React Native", isCompleted: false },
  ]);

  const completeHandler = (id: TodoItemType["id"]): void => {};
  const deleteHandler = (id: TodoItemType["id"]): void => {};

  return (
    <Container maxWidth="sm" sx={{height:'100vh'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography>To-Do App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem deleteHandler={deleteHandler} completeHandler ={completeHandler} key={i.id} todo={i}  />
        ))}
        
      </Stack>
      <TextField fullWidth label={'Add Task'}/>
      <Button sx={{margin: '1rem 0'}} fullWidth variant ='contained'>Add</Button>
    </Container>
  );
}

export default App;

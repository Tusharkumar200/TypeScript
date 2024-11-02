import { Delete, Edit } from "@mui/icons-material";
import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo,completeHandler, deleteHandler}: PropsType) => {
  return (
    <Paper sx={{ padding: '1rem' }}>
      <Stack direction="row" alignItems={'center'}>
        <Typography marginRight={'auto'} variant="body1">
          {todo.title}
        </Typography>
        <Checkbox />
        <Button> <Edit/> </Button>
        <Button><Delete/> </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
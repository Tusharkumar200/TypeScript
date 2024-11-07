import { Button, Container, List, ListItem, Stack, Typography } from "@mui/material";


const result = ["Lol", "Sample", "Ans"];
const words =[
  {
    meaning: "Asdsa",
  },
  {
    meaning: "Asdsdsfda",
  },
]
const Result = () => {
  const correctAns = 5;
  const percentage = (correctAns / words.length) * 100;

  return (
    <Container maxWidth={'sm'}>
      <Typography variant='h3' color={"primary"} m={'2rem 0'}>Result</Typography>
      <Typography variant='h6' m={'1rem '}>You got {correctAns} out of {words.length}</Typography>

      <Stack direction={"row"} justifyContent={"space-evenly"}> 
        <Stack>
          <Typography m={"1rem 0"} variant="h5">Your Ans </Typography>
          <List>
            {
              result.map((i, idx)=>(
                <ListItem key={idx}>{idx +1} - {i}</ListItem>)
              )
            }
          </List>
        </Stack> 

        <Stack>
          <Typography m={"1rem 0"} variant="h5">Correct Ans </Typography>
          <List>
            {
              words.map((i, idx)=>(
                <ListItem key={idx}>{idx +1} - {i.meaning}</ListItem>)
              )
            }
          </List>
        </Stack>
        </Stack>

        <Typography variant="h5" m={"1rem"} color={percentage > 50 ? "green": "red"}>You got {percentage > 50? "Pass": "Fail"}</Typography>

        <Button sx={{margin: "1rem"}} variant="contained">Reset</Button>
    </Container>
  )
}

export default Result
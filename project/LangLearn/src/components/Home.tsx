import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const languages =[
  {
    name: 'japanese',
    code: 'ja',
  },
  {
    name: 'Hindi',
    code: 'hi',
  },
  {
    name: 'Spanish',
    code: 'es',
  },
  {
    name: 'French',
    code: 'fr',
  },
]

function Home() {

  const navigate = useNavigate();

  const languageSelectHandler =(language: string):void=>{
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container>
      <Typography variant="h3" p={'2rem'} textAlign={'center'}>
        Welcome, Begin your journey of learning.
      </Typography>

      <Stack 
        direction="row"
        spacing={'2rem'}
         p={'2rem'}
         alignItems={'center'}
        justifyContent="center"
      >
          {
            languages.map((i)=>(
              <Button onClick={()=>{languageSelectHandler(i.code)}} key={i.code} variant="contained" color="primary">
                {i.name}  
              </Button>
            ))
          }
      </Stack>
        
        <Typography textAlign={'center'}>
          Choose a language to start learning
        </Typography>
    </Container>
  )
}

export default Home
import UseReducer from "./components/UseReducer";

function App() {
  // const [val, setVal] = useState <string>("");
  return (
    <>
      <div>
        {/* <Box heading={"Hello Tushar"} count={50} func1={(a:number , b:number) =>{
          console.log(a + b);
          
        }}>
          <h1>Children</h1>
        </Box>

        <Generic label="Search" value={val} setter={setVal}/>

        <UseContext /> */}
        <UseReducer />
      </div>
    </>
  );
}

export default App;

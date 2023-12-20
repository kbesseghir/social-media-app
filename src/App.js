import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Grid container spacing={1}>
  <Grid xs>
  <Sidebar />
  </Grid>
  <Grid sm={7} xs={11}>
  <Feed />
  </Grid>
  <Grid xs={3}>
  <Rightbar />
  </Grid>
  
</Grid>
   
    </div>
  );
}

export default App;

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <NavBar />
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Item style={{ color: "black", backgroundColor: "#00e676" }}>
            Aside
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Item style={{ color: "black", backgroundColor: "##ffea00" }}>
            Main Content goes here
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

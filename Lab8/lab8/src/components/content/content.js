import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import Four from "./pages/four";
import Five from "./pages/five";
import Six from "./pages/six";
import Seven from "./pages/seven";
import Eith from "./pages/eith";
import Nine from "./pages/nine";
import "./content.css";
import { ThemeContext } from "../../App";
import { Container, Grid } from '@mui/material';

function Content() {
    const theme = useContext(ThemeContext);
    
    return (
        <Container className={"myContent_" + theme} maxWidth="false">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={6}>
                    <Routes>
                        <Route path="One" element={<One />} />
                        <Route path="Two" element={<Two />} />
                        <Route path="Three" element={<Three />} />
                        <Route path="Four" element={<Four />} />
                        <Route path="Five" element={<Five />} />
                        <Route path="Six" element={<Six />} />
                        <Route path="Seven" element={<Seven />} />
                        <Route path="Eith" element={<Eith />} />
                        <Route path="Nine" element={<Nine />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Content;
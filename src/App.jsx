import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container} from "react-bootstrap";
import Menu from './componentes/navbar/navbar';
import AppRoutes from "./componentes/router/router";

function App() {
  return (
    <div className="App">
        <Menu/>
      <Container>
        <AppRoutes/>
      </Container>
    </div>
  );
}

export default App;
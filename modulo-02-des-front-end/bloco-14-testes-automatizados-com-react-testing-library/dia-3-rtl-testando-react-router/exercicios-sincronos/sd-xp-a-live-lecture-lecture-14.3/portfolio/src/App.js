import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/comments">Comentários</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/comments" component={ Comments } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    </>
  );
}

export default App;

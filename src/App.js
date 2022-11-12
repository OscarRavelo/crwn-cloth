import "./App.css";
import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import Navigation from "./Components/routes/navigation/navigation.component";
import SignIn from "./Components/routes/sign-in/sign-in.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="signin" element={<SignIn />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

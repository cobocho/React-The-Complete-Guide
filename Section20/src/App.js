import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </main>
    </div>
  );
}

export default App;

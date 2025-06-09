import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./landing_page";

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
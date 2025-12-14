import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Mathpyq from "./PYQ/Mathpyq";
import SubjectResources from "./PYQ/Mathpyq";
import Physics from "./PYQ/Physics";
import MathsNotes from "./Notes/MathsNotes";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/math-resources" element={<Mathpyq />} />
      <Route path="/physics-resources" element={<Physics />} />
      <Route path="/Maths-Notes" element={<MathsNotes />} />
      


    </Routes>
    // <Mathpyq/>
    

    

  );
}

export default App;

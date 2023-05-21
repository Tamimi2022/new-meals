import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeApi from "./components/RecipeApi";
import SingleRecipe from "./components/SingleRecipe";
import Help from "./components/Help";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeApi />} />
          <Route path="/meal/:id" element={<SingleRecipe />}/>
          <Route path="/help/:search" element={<Help />}/>
        </Routes>
      </Router>
    </>
  )
}
export default App

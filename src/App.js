import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import Create from "./pages/Create";
import Edit from "./pages/Edit";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Home />}/>
        <Route path="/:ownerId/create" element={<Create />}/>
        <Route path="/articles/:articledId/edit" element={<Edit />}/>
        <Route path="/articles/:articledId" element={<Article />}/>
        <Route path="*" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

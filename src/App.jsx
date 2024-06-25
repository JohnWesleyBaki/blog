import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

import PostCard from "./components/PostCard";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path={`/${post.title}`} element={<PostCard />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

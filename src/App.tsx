import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />

      <Route
        path="/blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />

      <Route path="/blog/:slug" 
      element={
        <Layout>
          <SinglePost />
        </Layout>
      } />
    </Routes>
  );
}

export default App;

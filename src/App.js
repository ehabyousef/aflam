import { Route, Routes } from "react-router-dom";
import Navbar from "./Nabar/Navbar";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Context from "./Context";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Moviess from "./Movies/Movies.jsx";
import MovieDetails from "./MovieDetails";
import SeriesDetails from "./SeriesDetails";
import Series from "./Series/Series";
import Contact from "./Contact/Contact";
import About from "./About/About";
import "./App.css";
import Notfound from "./NotFound/Notfound";

function App() {
  return (
    <>
      <Context>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            {["/", "home"].map((path, ind) => (
              <Route path={path} element={<Home />} key={ind} />
            ))}
            <Route path="movies" element={<Moviess />} />
            <Route path="series" element={<Series />} />
            <Route path="Movie/:id" element={<MovieDetails />} />
            <Route path="tv/:id" element={<SeriesDetails />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css'
import Layout from "./component/pages/layout";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Product from "./component/pages/product";
import Faq from "./component/pages/faq";
import Review from "./component/pages/review";
import Features from "./component/pages/features";
import User from "./component/auth/user";
import Userprofile from "./component/auth/userprofile";
import Forgetpassword from "./component/auth/forgetpassword";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="reviews" element={<Review/>}/>
          <Route path="feature" element={<Features/>}/>
          <Route path="user" element={<User/>}/>
          <Route path="user/profile" element={<Userprofile/>}/>
          <Route path="user/forgetpassword" element={<Forgetpassword/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

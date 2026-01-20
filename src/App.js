import './App.css';
import Navbar from "./components/Header/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Navbar />
            <Body />
            <Footer/>
        </Layout>
    </div>
  );
}

export default App;

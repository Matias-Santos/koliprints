import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import BodyContainer from "./components/BodyContainer";
import "./App.scss";
import SpamContainer from "./components/SpamContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="navBar-row">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
      </div>
      <div className="body-row">
        <SideBar title="Filters"></SideBar>
        <BodyContainer></BodyContainer>
        <SpamContainer></SpamContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

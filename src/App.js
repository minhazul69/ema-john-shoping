import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import MainHeaderSection from "./Components/Main-Header-Section/MainHeaderSection";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <div>
      <Header></Header>
      <MainHeaderSection></MainHeaderSection>
      <Shop></Shop>
    </div>
  );
}

export default App;

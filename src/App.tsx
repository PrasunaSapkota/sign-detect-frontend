import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
export default App;
<Header />;

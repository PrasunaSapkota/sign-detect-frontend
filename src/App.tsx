import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import FileUpload from "./FileUplod";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <div className="main-contents">
        <FileUpload />
        <div>Output placeholder</div>
      </div>
    </div>
  );
}
export default App;

import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [url, setUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
      setFile(evt.target.files[0]);
      const imageUrl = URL.createObjectURL(evt.target.files[0]);
      setUrl(imageUrl);
      setIsError(false);
    }
  };

  const handleClick = () => {
    if (!file) {
      console.log("No file choosen, Please choose file");
      setIsError(true);
      return;
    }
    //Todo uploading file process
    console.log("Uploading...........");
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Uploaded successfully");
      setIsLoading(false);
    }, 1000 * 5);
  };

  return (
    <>
      <ToastContainer />

      <div className="container">
        <div className="image-container">
          <label htmlFor="file-input" className="button">
            +
          </label>
          <input
            type="file"
            className="file-input"
            id="file-input"
            onChange={handleChange}
          />
        </div>
        {!!url && <img src={url} alt="Preview" className="image-preview" />}
      </div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "uploading" : "upload"}
      </button>
      {isError && (
        <p className="error-message">No file choosen please choose file</p>
      )}
    </>
  );
}

export default App;

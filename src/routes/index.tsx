import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../pages/home";
import AboutYOLO from "../pages/about-yolo";
import ABOUT_CNN_LSTM from "../pages/about-cnn-lstm";
import Comparison from "../pages/comparison";
import Upload from "../pages/upload";

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="about-yolo" element={<AboutYOLO />} />
      <Route path="about-cnn-lstm" element={<ABOUT_CNN_LSTM />} />
      <Route path="comparison" element={<Comparison />} />
      <Route path="upload" element={<Upload />} />
    </RouterRoutes>
  );
}
export default Routes;

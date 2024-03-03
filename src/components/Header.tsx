import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <p className="logo">Sign Language Detection</p>
          <div className="header_menu">
            <Link to="" className="link-element">
              Home
            </Link>
            <Link to="/about-yolo" className="link-element">
              About YOLO
            </Link>
            <Link to="/about-cnn-lstm" className="link-element">
              About CNN-LSTM
            </Link>
            <Link to="/comparison" className="link-element">
              Comparison
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

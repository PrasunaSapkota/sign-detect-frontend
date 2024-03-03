import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="section-start">
      <h1>Sign Language Detection </h1>
      <p>Let the “Something” be Heard</p>
      <Link to="upload" className="link-element">
        <button className="getstarted-button">Get Started</button>
      </Link>
    </div>
  );
}
export default GetStarted;

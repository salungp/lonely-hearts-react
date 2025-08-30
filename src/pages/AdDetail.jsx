import { Link } from "react-router-dom";
import Header from "../components/Header";

function AdDetail() {
  return (
    <>
      <Header back={true} backTo="/"></Header>
      <div className="container">
        <h1>This is ad detail page</h1>
        <Link to="/">Back to home</Link>
      </div>
    </>
  );
}

export default AdDetail;

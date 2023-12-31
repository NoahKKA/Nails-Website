import Nail404 from "../assets/images/nail-404-image.jpg"
import "../App.css"
import Default from "./DefaultPage"

function Error404Page() {
  return (
    <Default>
      <div className="bg-green-100" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div>
          <h2 className="error404 text-center">Sorry, the page you are trying to reach is unavailable.</h2>
          <h2 className="error404 text-center">Error 404: Page not found</h2> <br />
          <img src={Nail404} alt="NAIL 404" style={{ display: "block", margin: "0 auto" }} />
        </div>
      </div>
    </Default>
  );
}
export default Error404Page
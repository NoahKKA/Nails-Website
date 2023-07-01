import Nail404 from "../assets/images/nail-404-image.jpg"
import "../App.css"

function Error404Page() {
  return (
    <>
    <div className="errorPage">
        Sorry, the page you are trying to reach is unavailable. <br></br>
        <img src={Nail404} alt="NAIL 404" />
    </div>

    </>
  )
}

export default Error404Page
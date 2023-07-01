import Nail404 from "../assets/images/nail-404-image.jpg" 
import Default from "./DefaultPage"

function Error404Page() {
  return (
    <Default>
      <div>
          Sorry, the page you are trying to reach is unavailable. <br></br>
          <img src={Nail404} alt="NAIL 404" />
      </div>
    </Default>
  )
}

export default Error404Page
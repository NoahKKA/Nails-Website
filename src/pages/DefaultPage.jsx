import TopBar from "../componets/TopBar.jsx";
import Footer from "../componets/Footer.jsx"

const Default = (props) => {
  return (
    <div>
      <TopBar />
        {props.children}
      <Footer />
    </div>
  );
};

export default Default;

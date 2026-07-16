import firstImg from "./assets/image1.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sec1 relative w-screen h-screen overflow-hidden">
        <img className=" w-full h-full object-cover" src={firstImg} alt="" />

        <button
          onClick={() => navigate("/Invite")}
          className="absolute top-[45%] left-[35%] w-32 h-16 bg-red"
        ></button>
      </div>
    </>
  );
}

export default App;

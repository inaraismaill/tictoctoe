import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeValue } from "../store/features/gameslice";

function Home() {
  const dispatch = useDispatch();

  const [playerCount, setPlayerCount] = useState<3 | 4 | 0>(0);
  const [square, setSquare] = useState("#fff");
  const [bg, setBg] = useState("#000");
  const navigation = useNavigate();

  const start = () => {
    if (playerCount != 0) {
      navigation("/game");
      dispatch(changeValue([square, bg, playerCount]));
    }
  };

  const getPlayer = (e:any) => {
    if (e.target.style.backgroundColor == "rgb(38, 20, 130)") {
      setPlayerCount(0);
      e.target.style.backgroundColor = "rgb(32, 96, 214)";
    } else if (e.target.style.backgroundColor == "rgb(32, 96, 214)") {
      setPlayerCount(e.target.innerText);

      e.target.style.backgroundColor = "rgb(38, 20, 130)";
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat h-screen w-full"
      style={{
         background: "linear-gradient(0deg, rgba(2, 2, 2, 0.729), rgba(2, 2, 2, 0.729)), url(https://c1.wallpaperflare.com/preview/295/958/495/tic-tac-toe-empty-fields-puzzles-play.jpg)"
     
      }}
    >
      <main className=" text-white text-center p-10">
        <h1 className="m-10 text-3xl">Welcome to the game</h1>
        <div className="flex justify-center text-2xl items-center gap-10 ">
          <div className="flex gap-2 ">
            <h4>Select Background Color</h4>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              defaultValue="#000"
              onChange={(event) => setBg(event.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <h4>Select Square Color</h4>
            <input
              className=""
              type="color"
              id="favcolor"
              name="favcolor"
              onChange={(event) => setSquare(event.target.value)}
              defaultValue="#fff"
            />
          </div>
        </div>
        <div>
          <h2 className="m-7 text-2xl">Select Squares</h2>
          <div className="flex justify-center gap-10 text-2xl">
            <button
              disabled={playerCount == 4}
              onClick={(e) => getPlayer(e)}
              style={{ backgroundColor: "#2060d6" }}
              className=" text-white rounded-lg text-center px-9 py-2"
            >
              3
            </button>
            <button
              disabled={playerCount == 3}
              style={{ backgroundColor: "#2060d6" }}
              onClick={(e) => getPlayer(e)}
              className=" text-white rounded-lg text-center px-9 py-2"
            >
              4
            </button>
          </div>
        </div>
        <button
          onClick={start}
          className="bg-blue-500 text-white rounded-lg text-center px-9 py-2 my-10"
        >
          start
        </button>
      </main>
    </div>
  );
}

export default Home;

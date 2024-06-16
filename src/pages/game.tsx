import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Player from "../components/Player";
import Square from "../components/square";
import { useSelector } from "react-redux";

function Game() {
  const { bg, playerCount } = useSelector((state):any => state);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [click, setClick] = useState(0);
  const [player1, setPlayer1] = useState({
    winner: "",
    win: 0,
  });
  const [player2, setPlayer2] = useState({
    winner: "",
    win: 0,
  });
  const [board, setBoard] = useState(
    Array(playerCount * playerCount).fill(null)
  );

  const notify = () => toast(`Player ${currentPlayer} qalibdir!!!`);

  const handleClick = (index: number, e: any) => {
    const newBoard = [...board];
    if (e.target.innerHTML == "") {
      newBoard[index] = currentPlayer;
      setPlayer();
      setClick(index);
    } else if (e.target.innerHTML != currentPlayer && click == index) {
      newBoard[index] = null;
      setPlayer();
    }
    setBoard(newBoard);
    getWinner(newBoard);
    // console.log(currentBoard);
  };

  const setPlayer = () => {
    setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
  };

  const getTable = () => {
    if (playerCount == 3) {
      return [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    } else {
      return [
        [0, 1, 2, 3], // Satır 1
        [4, 5, 6, 7], // Satır 2
        [8, 9, 10, 11], // Satır 3
        [12, 13, 14, 15], // Satır 4
        [0, 4, 8, 12], // Sütun 1
        [1, 5, 9, 13], // Sütun 2
        [2, 6, 10, 14], // Sütun 3
        [3, 7, 11, 15], // Sütun 4
        [0, 5, 10, 15], // Çapraz sol üstten sağ alta
        [3, 6, 9, 12], // Çapraz sağ üstten sol alta
      ];
    }
  };
  const checkTable = (newBoard:any, item:any, win:any) => {
    if (win.length != 10) {
      return (
        newBoard[item[0]] === newBoard[item[1]] &&
        newBoard[item[1]] === newBoard[item[2]] &&
        newBoard[item[0]] !== null
      );
    } else {
      return (
        newBoard[item[0]] === newBoard[item[1]] &&
        newBoard[item[1]] === newBoard[item[2]] &&
        newBoard[item[3]] === newBoard[item[2]] &&
        newBoard[item[0]] !== null
      );
    }
  };

  const getWinner = (newBoard:any) => {
    const win = getTable();

    // win.forEach((item) => {
    //   if (checkTable(newBoard, item, win)) {
    //     if (currentPlayer == "x") {
    //       setCurrentPlayer("x");
    //       setPlayer1((prevPlayer) => ({
    //         winner: currentPlayer,
    //         win: prevPlayer.win + 1,
    //       }));
    //     } else {
    //       setCurrentPlayer("o");
    //       setPlayer2((prevPlayer) => ({
    //         winner: currentPlayer,
    //         win: prevPlayer.win + 1,
    //       }));
    //     }
    //     setBoard(Array(playerCount * playerCount).fill(null));
    //     notify();
    //   }
    // });

    for (let i = 0; i < win.length; i++) {
      const item = win[i];
      if (checkTable(newBoard, item, win)) {
        if (currentPlayer == "x") {
          setCurrentPlayer("x");
          setPlayer1((prevPlayer) => ({
            winner: currentPlayer,
            win: prevPlayer.win + 1,
          }));
        } else {
          setCurrentPlayer("o");
          setPlayer2((prevPlayer) => ({
            winner: currentPlayer,
            win: prevPlayer.win + 1,
          }));
        }
        setBoard(Array(playerCount * playerCount).fill(null));
        notify();
        break;
      }
    }
  };

  const reset = () => {
    setBoard(Array(playerCount * playerCount).fill(null));
    setPlayer1({ winner: "", win: 0 });
    setPlayer2({ winner: "", win: 0 });
  };
  return (
    <div style={{ backgroundColor: bg }} className="min-h-screen">
      <div className="justify-around items-center flex flex-col  w-full sm:w-2/3 md:w-1/2 lg:w-1/3  mx-auto my-0">
        <div className="flex justify-between w-full ">
          <Player player="x" win={player1.win} />
          <Player player="o" win={player2.win} />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <div
              style={{
                gridColumn: playerCount,
                display: "grid",
                gridTemplateColumns: `repeat(${playerCount}, 1fr)`,
              }}
            >
              {board.map((value, index) => (
                <Square
                  key={index}
                  value={value}
                  onClick={(e: any) => handleClick(index, e)}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={reset}
          className="bg-blue-500 text-white rounded-lg text-center p-3 m-6"
        >
          Reset
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Game;

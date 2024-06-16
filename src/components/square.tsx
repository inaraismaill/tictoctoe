import { useSelector } from "react-redux";

interface SquareProps {
  value: string;
  onClick: () => void;
}
function Square({ value, onClick }:SquareProps) {
  
  const { square, bg } = useSelector((state:any) => state);
  return (
    <div
      style={{boxShadow: "-1px 2px 22px 0px rgba(55,0,125,0.78)",
        backgroundColor: square,
        textShadow: "0px 0px 11px rgba(17,0,167,0.89)",
        color: bg,
        height: "6rem",
        width: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5rem",
        borderRadius: "1rem",
        margin: "0.5rem",
      }}
      onClick={onClick}
      key={value}
    >
      {value}
    </div>
  );
}

export default Square;

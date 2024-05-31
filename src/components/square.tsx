import { useSelector } from "react-redux";

function Square({ value, onClick }) {
  const { square, bg } = useSelector((state) => state);
  return (
    <div
      style={{
        backgroundColor: square,
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

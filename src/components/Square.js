import { useState } from "react";

const Square = (props) => {
  const [value, setValue] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setValue("X");
  };

  return <button className="square" onClick={handleClick}>{value}</button>
};

export default Square;
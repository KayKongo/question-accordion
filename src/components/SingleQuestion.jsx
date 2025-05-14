import { useState } from "react";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleAnswer = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="question">
      <h2>{title}</h2>
      <p>{showInfo ? info : ""}</p>
      <button onClick={() => toggleAnswer()}>Toggle</button>
    </div>
  );
};
export default SingleQuestion;

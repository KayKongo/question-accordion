import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questionData, setQuestionData] = useState(questions);

  return (
    <div className="container">
      {questionData.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            title={question.title}
            info={question.info}
          />
        );
      })}
    </div>
  );
};
export default App;

import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questionData, setQuestionData] = useState(questions);
  const [isActive, setIsAcive] = useState(null);

  const toggleActive = (id) => {
    const newId = id === isActive ? null : id;
    setIsAcive(newId);
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questionData.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              activeId={isActive}
              toggleActive={toggleActive}
            />
          );
        })}
      </section>
    </main>
  );
};
export default App;

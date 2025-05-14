import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questionData, setQuestionData] = useState(questions);

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questionData.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
};
export default App;

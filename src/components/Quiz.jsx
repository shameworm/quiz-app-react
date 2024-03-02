import { useState } from "react";

export default function Quiz() {
  const [activeSubject, setActiveSubject] = useState("Q1");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;


  return <p>Currently active Question</p>;
}

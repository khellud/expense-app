import React from "react";
import Expenses from "./components/Expenses/Expenses";
import "./index.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 75,
      date: new Date(2022, 2, 2),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 877,
      date: new Date(2022, 1, 4),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 285,
      date: new Date(2022, 3, 15),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 26),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

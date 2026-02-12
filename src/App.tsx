import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  

  const [expenses, setExpenses]=useState(
    [
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 20, category: "utilities" },
    { id: 3, description: "ccc", amount: 30, category: "utilities" },
    { id: 4, description: "bbb", amount: 20, category: "utilities" },
    { id: 5, description: "bbb", amount: 20, category: "utilities" },
  ]
  

  );
  
  if (expenses.length == 0 ) return null
  
  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id)) }
        />
      </div>
    </>
  );
}

export default App;

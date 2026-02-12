import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 20, category: "utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Groceries" },
    { id: 4, description: "bbb", amount: 20, category: "utilities" },
    { id: 5, description: "bbb", amount: 20, category: "utilities" },
  ]);

  if (expenses.length == 0) return null;
  const visibleExpnses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={visibleExpnses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;

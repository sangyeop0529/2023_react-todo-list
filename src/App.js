import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filterList = ["all", "active", "done"];

function App() {
  const [filter, setFilter] = useState(filterList[0]);
  return (
    <>
      <Header
        filterList={filterList}
        filter={filter}
        onFilterSelect={setFilter}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;

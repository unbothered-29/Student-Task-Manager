import { useState } from "react";
import Header from "./components/Header"
// import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

const App = () => {
const initialTasks = [
  {
    id: 1,
    title: "Revise React state",
    category: "Revision",
    completed: false
  },
  {
    id: 2,
    title: "CN assignment 1",
    category: "Assignment",
    completed: false
  },
  {
    id: 3,
    title: "SMLDS Experiments",
    category: "Experiments",
    completed: false
  },
  {
    id: 4,
    title: "Unit Test study",
    category: "Study",
    completed: false
  },
  {
    id: 5,
    title: "Revise WMC",
    category: "Revision",
    completed: false
  },
];

const student=[
{
  id:1,
  name:"Jessicaa",
  sem:5,
  dept:"AI&DS",
},
{
  id:2,
  name:"Yug",
  sem:7,
  dept:"Comps",
},
{
  id:3,
  name:"Shruti",
  sem:5,
  dept:"AI&DS",
},
];

const [tasks, settasks] = useState(initialTasks);

const completedCount = tasks.filter(
  (task) => task.completed
).length;

const pendingCount = tasks.length - completedCount;

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
      <TaskStats
         total={tasks.length}
         completed={completedCount}
         pending={pendingCount}
       />
    </div>
  );
}

export default App;
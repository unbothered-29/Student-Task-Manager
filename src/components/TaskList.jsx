import { useState } from "react"

const TaskList = () => {
    const [tasks, settasks] = useState([

    ]);

    const [input, setinput] = useState("");

  //for adding new task 
  const NewTask=(e)=>{
e.preventDefault();

if (!input.trim()) //to make sure user dosent enter blank input
return;

const tasks={
    id:Date.now(),  //for current date
    title:input,
    completed:false,
}

settasks([...tasks,tasks])  //to update aeeay
setinput("")
  };
  return (
    <div>
        <form 
        onSubmit={NewTask}
        >
            <input type="text"
            value={input}
            onChange={(e)=>
        setinput(e.target.value)
    }
    placeholder="Enter Task"
            />
            <button type="submit">Add a Task</button>
        </form>

        <div>
{tasks.map((task)=>(
    <p key={task.id}>
{task.title}
{task.completed ? "✅":"✝️"}
    </p>
    ))
}
        </div>
    </div>
  )
}

export default TaskList
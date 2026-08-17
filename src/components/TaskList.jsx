import TaskCard from "./TaskCard";

const TaskList=({ tasks })=> {
  return (
    <section>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </section>
  );
}

export default TaskList;
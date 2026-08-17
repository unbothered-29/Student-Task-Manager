const TaskStats=({ total, completed, pending })=> {
  return (
    <section>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </section>
  );
}

export default TaskStats;
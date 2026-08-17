
const TaskCard = ({task}) => {

  return (
<div>
  <h3 className="text-5xl">{task.title}</h3>
  <p>{task.category}</p>
       <div className="flex">
  <button className="p-3 bg-green-500">
        Completed
      </button>
      <button className="p-3 bg-red-500">
        Pending
      </button>
  </div>
</div> 
 );
}

export default TaskCard;
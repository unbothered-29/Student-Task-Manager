
const TaskCard = ({task}) => {

  return (
<div>
  <h3 className="text-5xl">{task.title}</h3>
  <p>{task.category}</p>
</div> 
 );
}

export default TaskCard;
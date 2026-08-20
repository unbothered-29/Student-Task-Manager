
const StudentCard = ({stu}) => {
  return (
    <div>
        {
        stu.map((stud)=>{
           <li key={stud}>{stud}</li>;
           <h2>{stud}</h2>
        })
}


    </div>
  )
}
export default StudentCard;
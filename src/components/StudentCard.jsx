
const StudentCard = ({stu}) => {
  return (
    <div>
        {
        stu.map((stud)=>{
           <li key={stud}>{stud}</li>
        })
}
    </div>
  )
}
export default StudentCard;
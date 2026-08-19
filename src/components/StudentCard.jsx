
const StudentCard = ({stu}) => {
  return (
    <div>
        {stu.map(()=>{
            key:{stu.id},
            dept:{stu.dept},
        })

}
    </div>
  )
}
export default StudentCard;
export const Practices=()=>{
const students=[1,3];
return (
  <>
  <p>{students.length  && "No Students Found"}</p>
  {/* 1st */}
   <p>{students.length===0  && "No Students Found"}</p>
   {/* 2nd */}
    <p>{!students.length  && "No Students Found"}</p>
    {/* 3rd */}
     <p>{Boolean(students.length)  && "No Students Found"}</p>
  <p>Number Of Students: {students.length}</p>
  </>
)
}
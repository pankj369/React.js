import { useState } from "react";
// const users=[
//   {name: "Alice", age:23},
//   {name: "Bob", age:33},
//   {name: "Charlie", age:25},
//   {name: "Angles", age:36},

// ]

export const DerivedState=()=>{
  const [users, setUsers]=useState([
  {name: "Alice", age:23},
  {name: "Bob", age:33},
  {name: "Charlie", age:25},
  {name: "Angles", age:36},

])
console.log(users)

const userCount=users.length;

const  avgAge=users.reduce((accum, curElem)=>accum+ curElem.age, 0)/userCount;
  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul> 
        {
          users.map((curElem, index)=>{
            return<>
            <li key={name}>
              {curElem.name}- {curElem.age} year old
            </li>
            </>
          })
        }
      </ul>
      <p>Total  Users : {userCount}</p>
        <p>Average Age: {avgAge}</p>
    </div>
  )
}
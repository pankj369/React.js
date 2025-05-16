import './EV.css'
export const EventHandling=()=>{
  // function handleButtonClick(event){
  //     // console.log(event)
  //     // console.log(event.target)
  //     // console.log(event.type)
  //   alert("Hey, I'm onClick event")
  
  // }

  const handleWelcomeUsers=(users)=>{
    console.log(`Hey ${users}, welcome`);
  }
  return (
    <>
    {/* <button onClick={handleWelcomeUsers}>Click me</button> */}
    <button className="btn" 
    onClick={()=>handleWelcomeUsers('pankaj')}>click me</button>
    </>
  )
}
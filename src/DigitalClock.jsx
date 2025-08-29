import React,{useState,useEffect} from 'react'

export default function DigitalClock() {
    const [time,setTime]=useState(new Date())

    useEffect(() => {
     const intervalId = setInterval(()=>{
         setTime(new Date())
     },1000)
         
           return()=>{
           clearInterval(intervalId)
           }
    },[])

    function padZero(number){
      return( number < 10 ? "0" : "" ) + number;
    } 

    function formatTime(){
        let Hours = time.getHours();
        let Mintues = time.getMinutes();
        let seconds = time.getSeconds();
        const meridian = Hours >= 12 ? "PM" : "AM"

        Hours = Hours % 12 || 12;

        return `${padZero(Hours)} : ${padZero(Mintues)} : ${padZero(seconds)} ${meridian}`;
    }

  return (
    <div className='clock-container'>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
   </div>
  )
}

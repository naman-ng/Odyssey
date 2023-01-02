import { transform } from 'framer-motion'
import React,{useState} from 'react'

function Event({name, tagline, knowmore, bg, image, align, key}) {

  let alignVal = align%2===0?"left":"right"
  const[isExpanded,setExpanded] = useState(false)
  let buttonText= "Know More"
  let height= 300
  let heightImg= 250

  function setButtonText(prev){
    buttonText= prev == true? "Show Less":"Know More";
  }
  function setHeight(prev){
    height= prev == true? 350:300;
  }

  return (
    <div  className= { ` w-screen transition-timing-function-[ease-in] 
                          ${(isExpanded)
                              ? "translate-y-[0.1vw] duration-[1000ms]"
                              : "translate-y-[0.1vw] duration-[1000ms]"
                            } transform transition-all `}
          style={{backgroundColor: bg, border: '2px solid #FFC809 ',  height: (isExpanded)? 360 :height     }} >  
      <img className={`mt-5   ${(isExpanded)
                  ? "translate-y-[0.1vw] duration-[1000ms]"
                  : "translate-y-[0.1vw] duration-[1000ms]"
                  } transform transition-all    
              ${ (alignVal==="left") ? "ml-20 mr-10" : "mr-40" } `}
            src= {image}  alt="image"  style={{
                                          float: alignVal,
                                          height: (isExpanded)? 300 :heightImg   }} />

      <div className={`ml-20 mt-20 ${(isExpanded) 
                                    ? "" : "translate-y-[0.1vw] duration-[1000ms]" }`}>
        <div className= {`translate-y-[0.1 vw] duration-[1200ms]
        ${(isExpanded)
            ? "text-6xl mt-9" : "text-3xl mt-10" } `}>
          {name} </div>

        <div className=
        {` translate-y-[0.1vw] duration-[1000ms] ${(isExpanded)
                                              ? "text-2xl " : "text-1xl " }`} >
          {tagline}
        </div>

        <div className= "font-italic mt-1 mr-40 col-2 text-4xs transition-delay-[10s] translate-y-[1vw] duration-[100ms] " >
        {(isExpanded)? knowmore:""} 
        </div>
      
          <div className="btn" style={{ color: bg }}>
              <button className={` font-bold text-[2xs] mt-4 bg-[#F9F9F9] rounded-lg p-1 
                      ${(isExpanded)
                        ? "translate-y-[1vw] duration-[1000ms]"
                        : "translate-y-[-1vw] duration-[1000ms]"
                      }  transform transition-all
                      ${(isExpanded)
                        ? "text-2xs " : "text-xs "} ` } 
                        type="button"
                        onClick= { () => { setExpanded(prev => !prev)}}  >
                      {setButtonText(isExpanded)}
                      {setHeight(isExpanded)}
                      {buttonText}
              </button>  
          </div>
          </div>    
    </div>
  )
}

export default Event
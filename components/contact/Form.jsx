import emailjs from "emailjs-com";
import { Router, useRouter } from "next/router";
import Styles from "../../styles/styles.module.css"

function Form(){
    const router=useRouter();
    function Sendmail(e){
        e.preventDefault();
        router.push("/successful");
        emailjs.sendForm("service_5j308vp","template_2vtx70s",e.target,"aJ6yDzrpNE9WJyctl").then(res=>{
            console.log(res);
            router.push("/");
        }).catch(err=>{
            console.log(err);
        })

    }


    return(
        <div className=" flex flex-col relative w-4/5 h-4/5 top-[12vmax] flex-wrap">
        <div className=" absolute w-full h-3/5 z-20 bg-contactFormTop pointer-events-none bg-no-repeat bg-contain">

        </div>
        <div className="absolute z-10 top-0 flex flex-col align-middle justify-center h-full w-full bg-[#F16823]">
        <form className=" flex h-2/3 mt-40 w-full flex-col justify-center align-middle " onSubmit={Sendmail}>
            <input className=" h-1/5 w-[90%] ml-[5%] rounded-lg bg-[#A14123] pl-4" type="email" name="email" placeholder="Email" />
            <input className="h-1/5 w-[90%] ml-[5%] mt-4 rounded-lg bg-[#A14123] pl-4" name="query" type="text" placeholder="Query"/>
            <button className="bg-[#d7b537] ml-[40%] flex flex-col rounded-lg hover:bg-[#897633] justify-center w-1/5 mt-4 h-1/5 pl-[8%] text-center" type="submit" >submit</button>
        </form>

        </div>
        <div className={Styles.contactFormLayerBottom +" absolute w-full h-3/5 z-20 bg-LayerBottomContact pointer-events-none bg-no-repeat bg-contain -bottom-[35%]  object-fill "}>

        </div>
        
        <div>

        </div>
        </div>

    )
}


export default Form;
import styles from "../../styles/login.module.css";
import Image from "next/image";
import logologo from "./logologo.png"
import { useRouter } from "next/router";
import baseUrl from "../../helpers/baseUrl";
import { useState } from "react";


function Login({}){

   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const router  = useRouter()

   const userLogin = async (e)=>{
      e.preventDefault()
      const res =  await fetch(`${baseUrl}/api/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })

      const res2 = await res.json()
      if(res2.error){
        M.toast({html: res2.error,classes:"red"})
      }else{
         console.log(res2)
         router.push("../lecture/index")
      }
  
    }

   return (<>
   
   <h1  className={styles.loginheading}>LOGIN</h1>
   <div className={styles.mainbox}>
      
   <div className={styles.logoimgs}>
      <Image src={logologo} alt="logo"className={styles.logoimge} />
      <p className={styles.quote}> Are you ready for the race ? </p>
   </div>
    <div className={styles.newbox}>
    
 
      <div className={styles.current}>

 
 
   <div>
      <form className={styles.FORM} onSubmit={(e)=>userLogin(e)}>
        
         <label className={styles.labelnames} type="email">Email Id</label>

         <input className={styles.inputs} placeholder="name@email.com"  value={email}
            onChange={(e)=>setEmail(e.target.value)}></input>
         <label className={styles.labelnames} >Password</label>
         
         <input  placeholder="Password" type="password" className={styles.inputs} value={password}
            onChange={(e)=>setPassword(e.target.value)} ></input>
         <button type="submit" className={styles.buttonfinal} >Login</button>

      </form>
   </div>
   
</div>
<p>Don't have an account ? Create a new account ! </p>
<a href="/auth/signup" className={styles.signin}>Sign Up</a>
</div>
</div>
</>
   )
}
export default Login

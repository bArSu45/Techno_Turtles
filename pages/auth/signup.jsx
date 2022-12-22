import styles from "../../styles/signup.module.css";
import Image from "next/image";
import logologo from "./logologo.png"
import { useState } from "react";
import { useRouter } from "next/router";
import baseUrl from "../../helpers/baseUrl";

function Signup(){
  const[name,setName] =useState("")
  const[email,setEmail] =useState("")
  const[dob,setDob] =useState("")
  const[password,setPassword] =useState("")
  const router  = useRouter()

    const userSignup =async (e)=>{
      e.preventDefault()
      const res =await fetch(`${baseUrl}/api/signup`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,dob,password
        })
      })
    
    const res2 = await res.json()
    if(res2.error){
      M.toast({html: res2.error,classes:"red"})
    }else{
      M.toast({html: res2.message,classes:"green"})
      router.push("/auth/login")
    }
  }


    return ( <>
   
    <h1  className={styles.loginheading}>SIGNUP</h1>
    <div className={styles.mainbox}>
       
    <div className={styles.logoimgs}>
       <Image src={logologo} alt="logo"className={styles.logoimge} />
      <p className={styles.quote}>We are here to help to build your career and help you to learn </p>
      <p className={styles.quote}>Slow and steady we will wins the race .</p>
    </div>
     <div className={styles.newbox}>
     
  
       <div className={styles.current}>
 
  
  
  <div>
    
  <form className={styles.formb} onSubmit={(e)=>userSignup(e)} >
    
    <label className={styles.labelnames}>Name</label>

    <input placeholder="Name" className={styles.inputs} value={name} onChange={(e)=>setName(e.target.value)}></input>

    <label className={styles.labelnames}>Email id</label>

    <input placeholder="name@email.com" type="email"className={styles.inputs} value={email} onChange={(e)=>setEmail(e.target.value)}></input>

    <label className={styles.labelnames}>Date Of Birth</label>
    
    <input placeholder="DD/MM/YYYY" type="date"className={styles.inputs} value={dob} onChange={(e)=>setDob(e.target.value)} ></input>
    
    <label className={styles.labelnames} >Password</label>
    
    <input placeholder="Password" type="password"className={styles.inputs} value={password} onChange={(e)=>setPassword(e.target.value)} ></input>

    
    <button type="submit" className={styles.buttonfinal} >Sign Up</button>
  </form>
  </div>
    
 </div>

 <p>Already have account ? Just Login ! </p>

 <a href="/auth/login" className={styles.signin}>Login</a>

 </div>

 </div>
 </>
    )
}

export default Signup





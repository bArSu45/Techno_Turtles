import styles from "../../styles/login.module.css";
import Image from "next/image";
import logologo from "./logologo.png"

function Login({}){
   return <>
   
   <h1  className={styles.loginheading}>LOGIN</h1>
   <div className={styles.mainbox}>
      
   <div className={styles.logoimgs}>
      <Image src={logologo} alt="logo"className={styles.logoimge} />
      <p className={styles.quote}> Are you ready for the race ? </p>
   </div>
    <div className={styles.newbox}>
    
 
      <div className={styles.current}>

 
 
   <div>
      <form className={styles.FORM}>
        
         <label className={styles.labelnames} type="email">Email Id</label>
         <input className={styles.inputs} placeholder="name@email.com" ></input>
         <label className={styles.labelnames} >Password</label>
         <input  placeholder="Password" type="password" className={styles.inputs} ></input>
         <button type="submit" className={styles.buttonfinal} >Login</button>

      </form>
   </div>
   
</div>
<p>Don't have an account ? Create a new account ! </p>
<a href="/auth/signup" className={styles.signin}>Sign Up</a>
</div>
</div>
</>
}
export default Login

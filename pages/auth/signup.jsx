import styles from "../../styles/signup.module.css";
import Image from "next/image";
import logologo from "./logologo.png"

function Signup(){
    return  <>
   
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
    <form className={styles.formb} >
    
    <label className={styles.labelnames}>Name</label>

    <input placeholder="Name" className={styles.inputs} ></input>

    <label className={styles.labelnames}>Email id</label>

    <input placeholder="name@email.com" type="email"className={styles.inputs} ></input>

    <label className={styles.labelnames}>Date Of Birth</label>
    
    <input placeholder="DD/MM/YYYY" type="date"className={styles.inputs}  ></input>
    <label className={styles.labelnames} >Password</label>
    <input placeholder="Password" type="password"className={styles.inputs}  ></input>

    <button type="submit" className={styles.buttonfinal} >Sign Up</button>
   </form>
    </div>
    
 </div>
 <p>Already have account ? Just Login ! </p>
 <a href="/auth/login" className={styles.signin}>Login</a>
 </div>
 </div>
 </>
}

export default Signup





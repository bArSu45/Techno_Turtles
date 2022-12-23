
import styles from "../../styles/signup.module.css";
import Image from "next/image";
import logologo from "./logologo.png"
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from 'next/link'

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const userSignup = (e) => {
    e.preventDefault()
    const payload = {
      email, password
    }
    //console.log(payload) 
    /*
    fetch("https://reqres.in/api/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        payload
      })
    }).then((res)=>res.json())
    .then((res)=>{if(res.token != null){
      router.push("/login")
    }})
    .catch((e)=>console.log(e))
    */

    axios.post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res)
        if (res.data.token) {
          router.push("/auth/login")
        }

      })
      .catch((e) => console.log(e))

  }


  return (<>

    <h1 className={styles.loginheading}>SIGNUP</h1>
    <div className={styles.mainbox}>

      <div className={styles.logoimgs}>
        <Image src={logologo} alt="logo" className={styles.logoimge} />
        <p className={styles.quote}>We are here to help to build your career and help you to learn </p>
        <p className={styles.quote}>Slow and steady we will wins the race .</p>
      </div>
      <div className={styles.newbox}>


        <div className={styles.current}>



          <div>

            <form className={styles.formb} onSubmit={(e) => userSignup(e)} >

              <label className={styles.labelnames}>Name</label>

              <input placeholder="Name" className={styles.inputs} value={name} onChange={(e) => setName(e.target.value)}></input>

              <label className={styles.labelnames}>Email id</label>

              <input placeholder="name@email.com" type="email" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)}></input>

              <label className={styles.labelnames}>Date Of Birth</label>

              <input placeholder="DD/MM/YYYY" type="date" className={styles.inputs} value={dob} onChange={(e) => setDob(e.target.value)} ></input>

              <label className={styles.labelnames} >Password</label>

              <input placeholder="Password" type="password" className={styles.inputs} value={password} onChange={(e) => setPassword(e.target.value)} ></input>


              <button type="submit" className={styles.buttonfinal} >Sign Up</button>
            </form>
          </div>

        </div>

        <p>Already have account ? Just Login ! </p>

        <Link href="/auth/login" className={styles.signin}>Login</Link>

      </div>

    </div>
  </>
  )
}

export default Signup





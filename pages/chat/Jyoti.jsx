import React from 'react'
import style from "/styles/chat.module.css"
import Link from "next/link";
export default function Jyoti() {
  return (
    <div id={style.barsu_main_div}>
      <div id={style.sidebar_main_container}>
      <Link href='/chat/Khalid'>
      <div className={style.sidebar_details_main_div} style={{backgroundColor:"#C58940"}}>
        <div className={style.instructor_img_div}>
            <img src='/images/khalid.jpg' alt='khalid'/>
        </div>
        <div className={style.instructor_name_div}>
            <h1>Khalid Shah</h1>
        </div>
      </div>
      </Link>
      <Link href='/chat/Barsu'>
      <div className={style.sidebar_details_main_div} style={{backgroundColor:"#DF7861"}}>
        <div className={style.instructor_img_div}>
            <img src='/images/barsu.jpeg' alt='khalid'/>
        </div>
        <div className={style.instructor_name_div}>
            <h1>Barsa Rani Ojha</h1>
        </div>
      </div>
      </Link>
      <Link href='/chat/Jyoti'>
      <div className={style.sidebar_details_main_div} style={{backgroundColor:"#7895B2"}}>
        <div className={style.instructor_img_div}>
            <img src='/images/jyoti.jpg' alt='khalid'/>
        </div>
        <div className={style.instructor_name_div}>
            <h1>Jyoti Prakash Mohapatra</h1>
        </div>
      </div>
      </Link>
      <Link href='/chat/Dora'>
      <div className={style.sidebar_details_main_div} style={{backgroundColor:"#76549A"}}>
        <div className={style.instructor_img_div}>
            <img src='/images/dora.jpg' alt='khalid'/>
        </div>
        <div className={style.instructor_name_div}>
            <h1>Priyanka Dora</h1>
        </div>
      </div>
      </Link>
    </div>
      <div id={style.jyoti_chat_main_div}>
        <div id={style.msg_details_div}>
        <div id={style.left_side_msg_div}>
          <p>Heyy</p>
        </div>
        <div id={style.right_side_msg_div}>
          <p>Good Morning</p>
        </div>
        </div>
<div id={style.input_btn_div}>
  <input/>
  <button>send</button>
</div>
      </div>
    </div>
  )
}

import React from 'react'
import style from "/styles/chat.module.css"
export default function Sidebar() {
  return (
    <div id={style.sidebar_main_container}>
      <div className={style.sidebar_details_main_div} style={{ backgroundColor: "#94B49F" }}>
        <div className={style.instructor_img_div}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU' alt='khalid' />
        </div>
        <div className={style.instructor_name_div}>
          <h1>Khalid Shah</h1>
        </div>
      </div>

      <div className={style.sidebar_details_main_div} style={{ backgroundColor: "#DF7861" }}>
        <div className={style.instructor_img_div}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU' alt='khalid' />
        </div>
        <div className={style.instructor_name_div}>
          <h1>Barsa Rani Ojha</h1>
        </div>
      </div>

      <div className={style.sidebar_details_main_div} style={{ backgroundColor: "#7895B2" }}>
        <div className={style.instructor_img_div}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU' alt='khalid' />
        </div>
        <div className={style.instructor_name_div}>
          <h1>Jyoti Prakash Mohapatra</h1>
        </div>
      </div>

      <div className={style.sidebar_details_main_div} style={{ backgroundColor: "#76549A" }}>
        <div className={style.instructor_img_div}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU' alt='khalid' />
        </div>
        <div className={style.instructor_name_div}>
          <h1>Priyanka Dora</h1>
        </div>
      </div>
    </div>
  )
}

import React from "react";
import style from "/styles/Home.module.css"
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter();

  const HandleDash = () => {
    router.push('/auth/login')
  }

  return <div id={style.main_div}>
    <div id={style.first_div}>
      <div id={style.first_para_div}>
        <h1>Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.</h1>
      </div>
      <div id={style.first_img_div}>
        <img src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif" />
      </div>
    </div>
    <div id={style.chat_prac_learn_div}>
      <div className={style.second_img_para_div}>
        <div>
          <img style={{ marginTop: "58px" }} src="https://www.targetfirst.com/wp-content/uploads/2021/03/clictochat-e1620817319308.png" alt="" />
        </div>
        <p style={{ marginTop: "-58px" }}>Chat with educators, ask questions, answer live polls, and get your doubts cleared.</p>
      </div>
      <div className={style.second_img_para_div}>
        <div>
          <img src="https://www.texasreview.in/images/anywhere.png" alt="" />
        </div>
        <p>Login into our website gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
      </div>
      <div className={style.second_img_para_div}>
        <div>
          <img src="https://www.clipartmax.com/png/full/475-4755430_solve-challenges-improve-your-coding-skills-with-practice-intraday-trading.png" alt="" />
        </div>
        <p>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
      </div>
    </div>
    <h1 id={style.your_instructor}>Your Instructors</h1>
    <div id={style.third_main_div}>
      <div className={style.third_img_para_div}>
        <div className={style.third_img_div}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU" alt="none" />
        </div>
        <div>
          <div className={style.third_para_div}>
            <p>A great programmer is able to understand problems clearly and propose solutions in a coherent manner. They understand concepts quickly and don't need to have everything written down in a specifications document.</p>
          </div>
          <div className={style.third_h3_logo_div}>
            <h3>Khalid Shah</h3>
          </div>
        </div>
      </div>

      <div className={style.third_img_para_div}>
        <div className={style.third_img_div}>
          <img src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" alt="none" />
        </div>
        <div>
          <div className={style.third_para_div}>
            <p>A great programmer is able to understand problems clearly and propose solutions in a coherent manner. They understand concepts quickly and don't need to have everything written down in a specifications document.</p>
          </div>
          <div className={style.third_h3_logo_div}>
            <h3>Barsa Rani Ojha</h3>
          </div>
        </div>
      </div>

      <div className={style.third_img_para_div}>
        <div className={style.third_img_div}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eCsr2-dOzB8bGFCpv_4OY5c0a-eV5adytdPcKlTLBCPd8gWTWUkIxQR5MjABUtO6daU&usqp=CAU" alt="none" />
        </div>
        <div>
          <div className={style.third_para_div}>
            <p>A great programmer is able to understand problems clearly and propose solutions in a coherent manner. They understand concepts quickly and don't need to have everything written down in a specifications document.</p>
          </div>
          <div className={style.third_h3_logo_div}>
            <h3>Jyoti Prakash Mohapatra</h3>
          </div>
        </div>
      </div>

      <div className={style.third_img_para_div}>
        <div className={style.third_img_div}>
          <img src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" alt="none" />
        </div>
        <div>
          <div className={style.third_para_div}>
            <p>A great programmer is able to understand problems clearly and propose solutions in a coherent manner. They understand concepts quickly and don't need to have everything written down in a specifications document.</p>
          </div>
          <div className={style.third_h3_logo_div}>
            <h3>Priyanka Dora</h3>
          </div>
        </div>
      </div>
    </div>
    <div id={style.fourth_main_div}>
      <div id={style.fourth_img_div}>
        <img src="https://www.whitehatjr.com/images/student_homepage/kidteacher-1x.png" alt="none" />
      </div>
      <div id={style.fourth_h1_btn_div}>
        <h1>Start Learning with <span><br></br>TECHNO TURTLES</span></h1>
        <div id={style.fourth_para_logo_div}>
          <p>Get unlimited access to structured courses & doubt clearing sessions.</p>
          <img src="https://res.cloudinary.com/dehubjbqm/image/upload/v1671645479/Logo_juatbw.png" />
        </div>
        <button onClick={() => HandleDash()} >Start Learning</button>
      </div>
    </div>

    <h1 id={style.your_instructor} style={{ marginLeft: "30px", marginBottom: "20px" }}>Why Techno Turtles ?</h1>
    <div id={style.why_techno_turtle_main_div}>
      <div className={style.why_techno_turtle_div} style={{ backgroundColor: "#663f93" }}>
        <img src="https://cdn.shopify.com/s/files/1/1306/4195/products/wallmantra-mdf-clocks-loops-shape-in-white-color-wooden-wall-clock-30137800229030_1000x1000.jpg?v=1628522417" />
        <h3>24*7 Doubts Solving</h3>
      </div>
      <div className={style.why_techno_turtle_div} style={{ backgroundColor: "#4e8ca2" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJaDCIF4EDDOpE3bnm7EeYWrqhiKZ11bbmpg&usqp=CAU" />
        <h3>Direct chat with Instructors</h3>
      </div>
      <div className={style.why_techno_turtle_div} style={{ backgroundColor: "#e0607d" }}>
        <img src="https://miro.medium.com/max/800/1*wcEYa9AjnMZxXAau2iuhYw.png" />
        <h3>Fexible with maximum languages</h3>
      </div>
      <div className={style.why_techno_turtle_div} style={{ backgroundColor: "#d6aa3a" }}>
        <img src="https://t4.ftcdn.net/jpg/01/89/35/89/360_F_189358912_Z1hKRmEtZ6hycMfEqaE8DRUfXRteyJ2O.jpg" />
        <h3>Best Instructors for DSA</h3>
      </div>
    </div>
    <div id={style.help_main_div}>
      <div id={style.help_details_div}>
        <h1>Have any queries?</h1>
        <p>Get a free counselling session from our experts</p>
        <div id={style.help_img_logo_div}>
          <img src="https://as2.ftcdn.net/v2/jpg/02/17/38/61/1000_F_217386141_576p3xaMFwgmLwPUWBEUQrMkWm3tGdmB.jpg" alt="none" />
          <div id={style.phn_call_details_div}>
            <p>Call us on our toll free number</p>
            <h1>1800-1800-1800-1800</h1>
          </div>
        </div>
      </div>
      <div id={style.form_main_div}>
        <input placeholder="Contact Number"></input>
        <input placeholder="Full Name"></input>
        <input placeholder="Email Address"></input>
        <button>Need Callback</button>
      </div>
    </div>
    <h1 id={style.your_instructor}>Reviews & Ratings</h1>
    <div id={style.review_main_div}>
      <h1>Read Hundreds of Reviews</h1>
      <img src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg" alt="none" />
      <h2>4.5 Customer Rating</h2>
      <h3>123 Reviews</h3>

    </div>
  </div>;
};

export default HomePage;

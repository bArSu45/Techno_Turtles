import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from '../../styles/dashboard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from "../../components/Navbar";

export default function JavaScript() {

    const categories = [
        { id: 1, uniqueId: 'javaintro', name: 'Introduction to Java', short_desc: "Java", img: "https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" },
        { id: 2, uniqueId: 'javafunda', name: 'Java Language Fundamentals', short_desc: "Java", img: "https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg" },
        { id: 3, uniqueId: 'javaobjcol', name: 'Object Collaboration', short_desc: "Java", img: "https://cdn.computercareers.org/wp-content/uploads/web-development.jpg" },
        { id: 5, uniqueId: 'javafunint', name: 'Funcational Interface', short_desc: "Java", img: "https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png" },
        { id: 4, uniqueId: 'javaoops', name: "Introduction of OOP's", short_desc: "Java", img: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" },
        { id: 6, uniqueId: 'javastream', name: 'Java Stream API', short_desc: "Java", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/web-development-647_062317054646.jpg" },
    ];

    // const router = useRouter();
    // const isAuth = true

    // useEffect(() => {
    //     if (!isAuth) {
    //         router.push('/auth/login')
    //     }
    // }, [isAuth])

    return <div id={styles.dashboardMain}>
        <Navbar />
        <Heading id={styles.goalHead}>Choose your goal</Heading>
        <Box id={styles.dashboardDiv}>
            <Box id={styles.dashSidebar}>
                <Link href='/dashboard/javascript'><Heading fontSize='20px' className={styles.sidebarHeadings}>JavaScript</Heading></Link>
                <Link href='/dashboard/reactjs'><Heading fontSize='20px' className={styles.sidebarHeadings}>ReactJs</Heading></Link>
                <Link href='/dashboard/java'><Heading fontSize='20px' className={styles.sidebarHeadings}>Java</Heading></Link>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>Angular</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>Python</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>DSA</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>MongoDB</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>NodeJs</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>Express</Heading>
                <Heading fontSize='20px' className={styles.sidebarHeadings}>NextJs</Heading>
            </Box>
            <Box id={styles.dashVideos}>
                {categories.map((cat) => {
                    return <Box key={cat.id} className={styles.boxes}>
                        <Image className={styles.boxImage} alt='image' src={cat.img} />
                        <Text className={styles.boxName}>{cat.name}</Text>
                        <Text className={styles.boxDesc}>{cat.short_desc}</Text>
                        <Text className={styles.boxOffer}>You don't need to pay anything</Text>
                        <Link href={`/lecture/${cat.uniqueId}`}><Button className={styles.boxButton} colorScheme='linkedin' mr='10px'>Learn Now</Button></Link>
                        <Link href={`/chat`}><Button className={styles.boxButton} colorScheme='green' >Take Help</Button></Link>
                    </Box>
                })}
            </Box>
        </Box>
    </div>;
}

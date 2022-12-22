import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../../styles/dashboard.module.css'
import Link from 'next/link'

const categories = [
    { uniqueId: 'jsintro', id: 1, name: 'Introduction to JavaScript', short_desc: "JavaScript", img: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" },
    { uniqueId: 'jsarithopr', id: 2, name: 'JS Arithmetic Operators', short_desc: "JavaScript", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/web-development-647_062317054646.jpg" },
    { uniqueId: 'jscomop', id: 3, name: 'Comparison Operators', short_desc: "JavaScript", img: "https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg" },
    { uniqueId: 'jsconstate', id: 4, name: 'Conditional Statements', short_desc: "JavaScript", img: "https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" },
    { uniqueId: 'jsconlog', id: 5, name: 'Logical Operators', short_desc: "JavaScript", img: "https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png" },
    { uniqueId: 'jswhilloop', id: 6, name: 'While Loops', short_desc: "JavaScript", img: "https://cdn.computercareers.org/wp-content/uploads/web-development.jpg" }
];

const Dashborad = () => {
    return <div id={styles.dashboardMain}>
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
                        <Link href={`/help`}><Button className={styles.boxButton} colorScheme='green' >Take Help</Button></Link>
                    </Box>
                })}
            </Box>
        </Box>
    </div>;
};

export default Dashborad;

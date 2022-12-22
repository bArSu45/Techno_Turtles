import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react';
import styles from '../../styles/dashboard.module.css'

const videos = [
    { uniqueId: 'jsintro', name: 'Introduction to JavaScript', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Khalid Shah' },
    { uniqueId: 'jsarithopr', name: 'JS Arithmetic Operators', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Barsa Rani Ojha' },
    { uniqueId: 'jscomop', name: 'Comparison Operators', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Priyanka Rani Dora' },
    { uniqueId: 'jsconstate', name: 'Conditional Statements', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Jyoti Prakash Mohapatra' },
    { uniqueId: 'jsconlog', name: 'Logical Operators', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Barsa Rani Ojha' },
    { uniqueId: 'jswhilloop', name: 'While Loops', short_desc: "Learn JavaScript", video_link: 'will be uploaded soon', teacher: 'Jyoti Prakash Mohapatra' },
    { uniqueId: 'javaintro', name: 'Introduction to Java', short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Priyanka Rani Dora' },
    { uniqueId: 'javafunda', name: 'Java Language Fundamentals', short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Khalid Shah' },
    { uniqueId: 'javaobjcol', name: 'Object Collaboration', short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Jyoti Prakash Mohapatra' },
    { uniqueId: 'javafunint', name: 'Funcational Interface', short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Khalid Shah' },
    { uniqueId: 'javaoops', name: "Introduction of OOP's", short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Priyanka Rani Dora' },
    { uniqueId: 'javastream', name: 'Java Stream API', short_desc: "Learn Java", video_link: 'will be uploaded soon', teacher: 'Jyoti Prakash Mohapatra' },
    { uniqueId: 'rctintro', name: 'Introduction to ReactJs', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Barsa Rani Ojha' },
    { uniqueId: 'rctjsx', name: 'Components And JSX', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Khalid Shah' },
    { uniqueId: 'rctstate', name: 'React State', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Jyoti Prakash Mohapatra' },
    { uniqueId: 'rctmng', name: 'State Management', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Priyanka Rani Dora' },
    { uniqueId: 'rctusefct', name: 'useEffect', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Khalid Shah' },
    { uniqueId: 'rctuseref', name: 'UseRef', short_desc: "Learn React", video_link: 'will be uploaded soon', teacher: 'Barsa Rani Ojha' },
]

export default function Preview() {
    const { query } = useRouter();
    const [video, setVideo] = useState({})

    useEffect(() => {
        let video = videos.find((v) => v.uniqueId === query.id)
        setVideo(video)
    }, [query.id])
    console.log(video)

    return (
        <Box id={styles.lectureMainDiv}>
            <Box mt='20px' textAlign='center'>
                {
                    video && Object.keys(video).length > 0 && <Box w='50%' m='auto'>
                        <Text fontSize='22px' fontWeight='bold' mb='20px'>{video.name}</Text>
                        {/* <Box width='50%' m='auto'>
                        <video width="100%" controls>
                            <source src={video.video_link} type="video/mp4" />
                        </video>
                    </Box> */}
                        <Box width='100%'>
                            <video width="100%" poster={`/images/${video.uniqueId}.jpg`} controls>
                                <source src="/lectures/next.mp4" type="video/mp4" />
                            </video>
                        </Box>
                        <Text textAlign='right' fontWeight='bold' mt='10px'>Instructor: {video.teacher}</Text>
                    </Box>
                }
            </Box>
        </Box>
    )
}

import React from 'react';
import { Box, Typography, Divider } from "@mui/material";
import { info } from "../../info/Info";

export default function About({ innerRef }) {
    return (
        <Box
            ref={innerRef}
            id="about"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={{ xs: 4, md: 8 }}
            py={6}
            maxWidth="900px"
            margin="0 auto"
        >
            <Typography variant="h3" gutterBottom>
                About Me
            </Typography>

            <Typography variant="body1" fontSize="1.2rem" textAlign="center" mb={4}>
                I’m Mark Sbitnev, a software developer with 5 years of hands-on experience building scalable, efficient solutions.
                My background spans computer vision, machine learning, robotics, and 3D design. I love working on systems that blend
                code and hardware, especially in robotic and embedded environments. I'm currently studying Computer Science (Hons)
                at Toronto Metropolitan University and constantly exploring new ways to bring code into the physical world.
            </Typography>

            {/* Programming Languages */}
            <SkillCategory title="Programming Languages" skills={[
                'Python', 'C++', 'C#', 'JavaScript', 'SQL', 'BASH', 'Motorola 6809 Assembly'
            ]} />

            {/* 3D Design & Tools */}
            <SkillCategory title="3D Design & Tools" skills={[
                'Fusion 360', 'SolidWorks', 'Unity 3D', '3D Printing', 'Robotics Kinematics', 'CAD Modeling', 'Hardware Integration'
            ]} />

            {/* Other Technical Skills */}
            <SkillCategory title="Other Technical Skills" skills={[
                'React', 'YOLO Object Detection', 'TensorFlow', 'OpenCV', 'Arduino', 'Git', 'Agile Development', 'WebSocket', 'Embedded Systems'
            ]} />

            {/* Spoken Languages */}
            <SkillCategory title="Spoken Languages" skills={[
                'Russian (Native)', 'Hebrew (Fluent)', 'English (Fluent)'
            ]} />
        </Box>
    );
}

// Reusable subcomponent to display each skill category
function SkillCategory({ title, skills }) {
    return (
        <Box width="100%" mb={4}>
            <Typography variant="h5" mb={1} color="primary">
                {title}
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Box display="flex" flexWrap="wrap" gap={1}>
                {skills.map((skill, idx) => (
                    <Box
                        key={idx}
                        px={2}
                        py={1}
                        border="1px solid #888"
                        borderRadius="20px"
                        fontSize="0.95rem"
                    >
                        {skill}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

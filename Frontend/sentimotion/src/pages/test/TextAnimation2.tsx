import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const AnimatedTextCharacter = ({ text }: { text: string }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.01, delayChildren: 0.02 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <Typography
            gutterBottom
            variant="h6"
            component={motion.div}
            align="center"
            style={{
                fontSize: '20px',
                fontFamily: 'monospace',
                overflow: 'hidden',
                display: 'flex',
                color: '#5A5A5A', // Moved color property here
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </Typography>
    );
};

export default AnimatedTextCharacter;

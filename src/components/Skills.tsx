'use client'
import { motion } from "motion/react";

const Skills = () => {
    const skills = ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Python", "Flask", "Java", "Springboot", "SQLite", "PostgreSQL", "MySQL", "Docker", "kubernetes", "AWS", "Supabase"]
    const doubledSkills=[...skills,...skills];
    return (
        <div className="w-full overflow-hidden p-4 absolute bottom-0 z-10 bg-black/40">
            <motion.div className="flex gap-4 w-max" animate={{x:'-50%'}} transition={{repeat:Infinity, ease:'linear', duration:30}}>
                {
                    doubledSkills.map((skill, index) => (
                        <div key={index} className="bg-white/20 px-4 py-2 text-2xl font-bold text-center w-full text-white whitespace-nowrap">{skill}</div>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default Skills;
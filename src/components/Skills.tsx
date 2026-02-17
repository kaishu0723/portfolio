const Skills = () => {
    const skills = ["Next.js", "React", "Flask", "HTML/CSS", "JavaScript", "TypeScript", "Python"]
    return (
        <div>
                <hr className="border border-white my-4" />
            <div className="grid grid-cols-4 gap-4">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="bg-white px-4 py-2 text-2xl font-bold text-center w-full rounded-sm text-neutral-800">{skill}</div>
                    ))
                }
                <div className="border border-dashed border-white rounded-sm text-white text-center px-4 py-2 w-full text-2xl">+ New</div>
            </div>
        </div>
    );
}

export default Skills;
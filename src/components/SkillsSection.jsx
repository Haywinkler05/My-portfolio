import { useState } from "react"
import {cn} from '@/lib/utils'

const Skills = [
    {name: "Python" , level: 100, category: "Programming Languages"},
    {name: "C++", level: 90, category: "Programming Languages"},
    {name: "C", level: 70, category: "Programming Languages"},
    {name: "C#", level: 60, category: "Programming Languages"},
    {name: "WGSL", level: 40, category: "Programming Languages"},
    {name: "Javascript", level: 40, category: "Frontend"},
    {name: "HTML/CSS", level: 90, category: "Frontend"},
    {name: "React", level: 30, category: "Frontend"},
    {name: "Tailwind css", level: 20, category: "Frontend"},
    {name: "SQL", level: 70, category: "Backend"},
    {name: "mySQL", level: 80, category: "Backend"},
    {name: "Unity", level: 60, category: "Game Engines"},
    {name: "Godot", level: 50, category: "Game Engines"},
    {name: "Windows", level: 85, category: "Operating Systems"},
     {name: "Command Line", level: 70, category: "Operating Systems"},
    {name: "WSL", level: 80, category: "Operating Systems"},
    {name: "Linux", level: 60, category: "Operating Systems"},
    {name: "VS Code", level: 100, category: "Tools"},
    {name: "Github", level: 80, category: "Tools"},
    {name: "Excel", level: 50, category: "Tools"},
    {name: "Object Oriented Programming", level: 100, category: "Conceptual"},
    {name: "Data Structures and Algorithms", level: 70, category: "Conceptual"},
    {name: "Game Physics", level: 60, category: "Conceptual"},
    {name: "Artificial Intelligence", level: 40, category: "Conceptual"},





    
   
    
]
const categories = ["all", "Programming Languages", "Frontend", "Backend", "Game Engines", "Operating Systems", "Tools", 'Conceptual']

export const SkillsSection = () =>{
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = Skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return <section id="skills" className="py-24 px-4 relative bg-secondary / 30">
        <div className="container mx-auto max-w-5xl" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) =>(
                    <button key={key} 
                    onClick={() =>setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>{category}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((Skills, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4 ">
                            <h3 className="font-semibold text-lg">
                                {Skills.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                            style={{width: Skills.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-small text-muted-foreground">{Skills.level}%</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>

    </section>
}
import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        passionate Web Developer and tech creator
                    </h3>
                    <p className="text-muted-foreground">
                        With over 9 years of programming experience in various types of fields, I focus on areas related to computer graphics, UI/UX, Game Development, VXR, Web Dev,
                        and so on.
                    </p>
                    <p className="text-muted-foreground">
                        I am passionate on making computer experiences that will blow users away. Wether it's is creating a game, making a nice website, or creating imersive VXR experiences
                        I plan on constantly growing my skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/></div>
                            <div className="text-left ">
                                <h4 className="font-semibold">Web Development</h4>
                                <p className="text-muted-foreground"> Creating responsive websites and web applications with modern frameworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/></div>
                             <div className="text-left ">
                                <h4 className="font-semibold">UI/UX</h4>
                                <p className="text-muted-foreground"> Designing intuitive user interfaces and seamless user experiences.    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/></div>
                             <div className="text-left ">
                                <h4 className="font-semibold">Leadership Experience</h4>
                                <p className="text-muted-foreground"> I am the current president and founder of the video game design club at Mississippi State Unviersity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
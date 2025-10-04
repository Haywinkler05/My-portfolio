export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>
                        passionate Web Developer and tech creator
                    </h3>
                    <p className="text-muted-foreground">
                        With over 9 years of programming experience in various types of fields, I focus on areas related to computer graphics, UI/UX, Game Development, VXR, Web Dev,
                        and so on.
                    </p>
                    <p>
                        I am passionate on making computer experiences that will blow users away. Wether it's is creating a game, making a nice website, or creating imersive VXR experiences
                        I plan on constantly growing my skills.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    </section>
}
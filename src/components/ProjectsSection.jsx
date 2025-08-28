import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Web App",
    description: "A financial web app using React and Tailwind.",
    image: "/projects/tnt.png",
    tags: ["TypeScript", "React", "TailwindCSS", "Zustand", "Framer Motion"],
    demoUrl: "https://takentrade.com/",
    // githubUrl: "#",
    platform: ["Web"],
  },
  {
    id: 2,
    title: "Monita Financial App",
    description:
      "Beautiful Online financial platform, making all kinds of payment easy and stress free.",
    image: "/projects/monita.png",
    tags: ["TypeScript", "Framer Motion", "React", "TailwindCSS"],
    demoUrl: "https://www.monita.ng/",
    // githubUrl: "#",
    platform: ["Web"],
  },
  {
    id: 3,
    title: "E-Study Lab",
    description:
      "An online educational platform for students to learn and  practice. ",
    image: "/projects/studylab.png",
    tags: ["TypeScript", "React Native", "Expo", "Tanstack Query", "Redux"],
    demoUrl: "https://front.e-studylab.com/",
    // githubUrl: "#",
    platform: ["Web", "Mobile"],
  },
  {
    id: 4,
    title: "Crypto Currency Platform",
    description:
      "Crypto currency platform for user to store and keep their ctypto assest and boost their portfolio",
    image: "/projects/flowday.png",
    tags: ["TypeScript", "React Native", "Expo", "Tanstack Query", "Redux"],
    demoUrl: "https://flowday-frontend.vercel.app/",
    // githubUrl: "#",
    platform: ["Web"],
  },
  {
    id: 4,
    title: "KM Kiosk",
    description:
      "KM Kiosk is the sign in and signs out app for your childcare centre. Not only is it compliant with the new Australian Government.",
    image: "/projects/kiosk.png",
    tags: ["React Native", "Context Api"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.kmkioskapp&hl=en_IN",
    // githubUrl: "#",
    platform: ["Mobile"],
  },
  {
    id: 5,
    title: "Kulipa",
    description:
      "This app provides a platform to buy food, reserve spaces in restaurants, rent/book apartments and hotel rooms, explore events and purchase ticket(s)",
    image: "/projects/kulipa.png",
    tags: ["React Native", "Expo", "Tanstack Query", "Context Api"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.kulipamegaglobal.kulipal&hl=en-US",
    platform: ["Mobile"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index + "tag"}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project?.githubUrl && (
                      <a
                        href={project?.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}

                    {project?.platform.map((item, index) => (
                      <span
                        key={index + "platform"}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/johnkratos1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

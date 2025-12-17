import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "React Portfolio",
    description:
      "A modern portfolio website built with React and Vite, showcasing responsive design and smooth animations.",
    technologies: ["React", "Vite", "CSS3", "JavaScript"],
    image: "/modern-portfolio-website-dark-theme.jpg",
    github: "https://github.com/Milan721166/react_protfilio",
    live: "https://react-protfilio.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/ecommerce-dashboard.jpg",
    github: "https://github.com/Milan721166",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/task-management-app.jpg",
    github: "https://github.com/Milan721166",
    live: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with real-time forecasts, location detection, and interactive maps.",
    technologies: ["React", "Weather API", "Mapbox", "Tailwind"],
    image: "/weather-app-interface.jpg",
    github: "https://github.com/Milan721166",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management.",
    technologies: ["Next.js", "MDX", "Contentful", "Vercel"],
    image: "/blog-website-interface.jpg",
    github: "https://github.com/Milan721166",
    live: "#",
  },
  {
    title: "Social Dashboard",
    description: "Analytics dashboard with interactive charts and real-time data visualization.",
    technologies: ["React", "Chart.js", "Express", "MongoDB"],
    image: "/analytics-dashboard.png",
    github: "https://github.com/Milan721166",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Some of my recent work and personal projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-shadow bg-card border-border"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

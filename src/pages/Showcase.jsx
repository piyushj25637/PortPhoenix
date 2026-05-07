import { Link } from 'react-router-dom'
import { myPortfolios } from '../data/portfolios'
import './Showcase.css'

function Showcase() {
  const pathParts = window.location.pathname.split('/')
  const id = pathParts[pathParts.length - 1]

  const portfolio = myPortfolios.find((p) => p.id === parseInt(id)) || myPortfolios[0]

  return (
    <div className="showcase-page">
      <nav className="showcase-nav">
        <span className="showcase-brand">Jane Doe.</span>
        <div className="showcase-nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="showcase-nav-actions">
          <button className="btn-outline showcase-resume-btn">Resume</button>
          <Link
            to={`/editor/${portfolio.id}`}
            className="showcase-edit-btn"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            title="Edit this portfolio"
          >
            ✏️ Edit
          </Link>
        </div>
      </nav>

      <section className="showcase-hero fade-in">
        <h1 className="showcase-headline">
          Crafting digital experiences
          <br />
          <em>with purpose and precision.</em>
        </h1>
        <p className="showcase-bio">
          I'm a multidisciplinary designer focused on creating intuitive,
          high-end interfaces that bridge the gap between complex functionality
          and human-centered design.
        </p>
        <a href="#work" className="btn-primary showcase-cta">
          View Selected Work
        </a>
      </section>

      <section className="showcase-work" id="work">
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}

          <ProjectCard
            project={{
              id: 'extra1',
              title: 'Architectural Review',
              tags: ['Web Design'],
              description: 'A deep-dive review of modern architectural patterns in digital products.',
              coverColor: '#d4c5b0',
              emoji: '🏛️',
            }}
            featured={false}
          />
          <ProjectCard
            project={{
              id: 'extra2',
              title: 'Enterprise Design System',
              tags: ['Systems', 'Architecture'],
              description: 'Establishing a cohesive visual language and component library for internal corporate tools.',
              coverColor: '#b0bec5',
              emoji: '⬡',
            }}
            featured={false}
          />
        </div>
      </section>

      <section className="showcase-about" id="about">
        <div className="about-inner">
          <div className="about-avatar">✦</div>
          <div className="about-text">
            <h2 className="about-title">About</h2>
            <p>
              I'm a designer with 5+ years of experience working with startups
              and global brands. I specialize in product design, design systems,
              and frontend development.
            </p>
            <div className="about-skills">
              {['UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'React', 'Figma'].map(
                (skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-contact" id="contact">
        <h2 className="contact-title">Let's work together</h2>
        <p className="contact-sub">
          Available for freelance projects and full-time opportunities.
        </p>
        <a href="mailto:hello@janedoe.com" className="btn-primary contact-btn">
          Say Hello →
        </a>
      </section>

      <footer className="showcase-footer">
        <span>Jane Doe. © 2024</span>
        <div className="showcase-footer-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
        </div>
        <Link to="/" className="built-with">
          Built with PortPhoenix ↗
        </Link>
      </footer>
    </div>
  )
}

function ProjectCard({ project, featured }) {
  return (
    <div className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div
        className="project-cover"
        style={{ background: project.coverColor }}
      >
        <span className="project-cover-emoji">{project.emoji}</span>
      </div>

      <div className="project-info">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        {project.description && (
          <p className="project-desc">{project.description}</p>
        )}
      </div>
    </div>
  )
}

export default Showcase

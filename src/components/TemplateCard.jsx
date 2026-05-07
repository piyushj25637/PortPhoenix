import { Link } from 'react-router-dom'
import Card from './Card'
import './TemplateCard.css'

function TemplateCard({ template }) {
  return (
    <Card className="template-card">
      <div
        className="template-preview"
        style={{ background: template.color }}
      >
        <span className="template-emoji">{template.emoji}</span>
        {template.featured && (
          <span className="template-badge">Featured</span>
        )}
      </div>

      <div className="template-info">
        <div>
          <h3 className="template-name">{template.name}</h3>
          <p className="template-tags">
            {template.tags.join(' \\ ').toUpperCase()}
          </p>
          <p className="template-desc">{template.description}</p>
        </div>

        <Link to={`/editor/${template.id}`} className="btn-primary template-btn" style={{ textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>
          Use Template
        </Link>
      </div>
    </Card>
  )
}

export default TemplateCard

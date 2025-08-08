
import './ResourcesSection.css'

export default function ResourcesSection() {
  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resource-card">
          <span className="emoji">📚</span>
          <h3>Resources</h3>
          <p>xxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div className="resource-card">
          <span className="emoji">💡</span>
          <h3>Use cases</h3>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div className="resource-card">
          <span className="emoji">❤️</span>
          <h3>Testimonials</h3>
          <p>xxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div className="resource-card">
          <span className="emoji">⚡</span>
          <h3>Features</h3>
          <p>xxxxxxxxxxxxxxx</p>
        </div>
      </div>
    </section>
  )
}

import './ProgramCard.css';

const ProgramCard = ({ 
  title, 
  description, 
  organization, 
  logo, 
  duration, 
  stipend, 
  applicationDeadline, 
  skills = [], 
  link, 
  featured = false 
}) => {
  return (
    <div className={`program-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="featured-badge">Featured</div>}
      
      <div className="program-header">
        <div className="program-logo">
          {logo ? (
            <img src={logo} alt={`${organization} logo`} />
          ) : (
            <div className="logo-placeholder">
              {organization?.charAt(0) || 'P'}
            </div>
          )}
        </div>
        <div className="program-info">
          <h3 className="program-title">{title}</h3>
          <p className="program-organization">{organization}</p>
        </div>
      </div>

      <p className="program-description">{description}</p>

      <div className="program-details">
        {duration && (
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{duration}</span>
          </div>
        )}
        {stipend && (
          <div className="detail-item">
            <span className="detail-label">Stipend:</span>
            <span className="detail-value">{stipend}</span>
          </div>
        )}
        {applicationDeadline && (
          <div className="detail-item">
            <span className="detail-label">Application Deadline:</span>
            <span className="detail-value">{applicationDeadline}</span>
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <div className="program-skills">
          <h4 className="skills-title">Required Skills:</h4>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="program-actions">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="program-link"
        >
          Learn More
          <svg 
            className="link-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
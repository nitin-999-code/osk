import { useState } from 'react';
import './Mentors.css';

const Mentors = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: "Sarah Ahmed",
      title: "Senior Software Engineer",
      company: "Google",
      avatar: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=SA",
      expertise: ["JavaScript", "React", "Node.js", "Cloud Computing"],
      experience: "5+ years",
      mentees: 25,
      bio: "Passionate about helping developers grow their skills in modern web technologies. I've mentored students through GSoC and help developers transition into tech careers.",
      specialties: ["Web Development", "Career Guidance", "Open Source"],
      location: "Srinagar, Kashmir",
      languages: ["English", "Urdu", "Kashmiri"],
      availability: "Weekends",
      category: "engineering"
    },
    {
      id: 2,
      name: "Mohammad Tariq",
      title: "DevOps Architect",
      company: "Microsoft",
      avatar: "https://via.placeholder.com/150x150/10b981/ffffff?text=MT",
      expertise: ["Kubernetes", "Docker", "AWS", "CI/CD"],
      experience: "7+ years",
      mentees: 18,
      bio: "Cloud and DevOps expert with extensive experience in building scalable infrastructure. Love sharing knowledge about cloud-native technologies.",
      specialties: ["DevOps", "Cloud Architecture", "System Design"],
      location: "Jammu, Kashmir",
      languages: ["English", "Hindi", "Urdu"],
      availability: "Evenings",
      category: "devops"
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "UX Design Lead",
      company: "Adobe",
      avatar: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=PS",
      expertise: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      experience: "6+ years",
      mentees: 32,
      bio: "Design thinking enthusiast who believes in creating user-centered experiences. I help aspiring designers build strong portfolios and land their dream jobs.",
      specialties: ["Design Systems", "User Research", "Portfolio Review"],
      location: "Bangalore, India",
      languages: ["English", "Hindi"],
      availability: "Flexible",
      category: "design"
    },
    {
      id: 4,
      name: "Aamir Khan",
      title: "Data Scientist",
      company: "Netflix",
      avatar: "https://via.placeholder.com/150x150/8b5cf6/ffffff?text=AK",
      expertise: ["Python", "Machine Learning", "TensorFlow", "PyTorch"],
      experience: "4+ years",
      mentees: 15,
      bio: "ML engineer passionate about making AI accessible. I guide students through data science projects and help them understand complex algorithms.",
      specialties: ["Machine Learning", "Data Analysis", "Research"],
      location: "Anantnag, Kashmir",
      languages: ["English", "Urdu", "Kashmiri"],
      availability: "Weekends",
      category: "data"
    },
    {
      id: 5,
      name: "Fatima Ali",
      title: "Open Source Advocate",
      company: "Red Hat",
      avatar: "https://via.placeholder.com/150x150/ef4444/ffffff?text=FA",
      expertise: ["Linux", "Open Source", "Community Building", "Git"],
      experience: "8+ years",
      mentees: 45,
      bio: "Long-time open source contributor and community builder. I help newcomers navigate the open source world and find their first contributions.",
      specialties: ["Open Source", "Community Management", "Technical Writing"],
      location: "Srinagar, Kashmir",
      languages: ["English", "Urdu", "Kashmiri", "Arabic"],
      availability: "Flexible",
      category: "opensource"
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      title: "Mobile App Developer",
      company: "Uber",
      avatar: "https://via.placeholder.com/150x150/06b6d4/ffffff?text=RK",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      experience: "5+ years",
      mentees: 20,
      bio: "Mobile development expert with apps used by millions. I love teaching mobile development and helping developers build their first apps.",
      specialties: ["Mobile Development", "App Store Optimization", "Cross-platform"],
      location: "Delhi, India",
      languages: ["English", "Hindi"],
      availability: "Evenings",
      category: "mobile"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Mentors', icon: '👥' },
    { value: 'engineering', label: 'Engineering', icon: '⚙️' },
    { value: 'devops', label: 'DevOps', icon: '☁️' },
    { value: 'design', label: 'Design', icon: '🎨' },
    { value: 'data', label: 'Data Science', icon: '📊' },
    { value: 'opensource', label: 'Open Source', icon: '🌐' },
    { value: 'mobile', label: 'Mobile', icon: '📱' }
  ];

  const filteredMentors = selectedCategory === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.category === selectedCategory);

  const openMentorModal = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeMentorModal = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="mentors">
      {/* Header Section */}
      <section className="mentors-header">
        <div className="container">
          <h1 className="mentors-title">Meet Our Mentors</h1>
          <p className="mentors-description">
            Connect with experienced professionals who are passionate about helping you grow 
            in your tech journey. Our mentors provide guidance, code reviews, and career advice.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mentors-categories">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`category-card ${selectedCategory === category.value ? 'active' : ''}`}
              >
                <div className="category-icon">{category.icon}</div>
                <span className="category-label">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="mentors-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {selectedCategory === 'all' 
                ? `All Mentors (${filteredMentors.length})` 
                : `${categories.find(c => c.value === selectedCategory)?.label} Mentors (${filteredMentors.length})`
              }
            </h2>
          </div>
          
          <div className="mentors-grid">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="mentor-card">
                <div className="mentor-avatar">
                  <img src={mentor.avatar} alt={mentor.name} />
                  <div className="mentor-status online"></div>
                </div>
                
                <div className="mentor-info">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-title">{mentor.title}</p>
                  <p className="mentor-company">@ {mentor.company}</p>
                  
                  <div className="mentor-stats">
                    <div className="stat">
                      <span className="stat-value">{mentor.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{mentor.mentees}</span>
                      <span className="stat-label">Mentees</span>
                    </div>
                  </div>

                  <div className="mentor-skills">
                    {mentor.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <span className="skill-tag more">+{mentor.expertise.length - 3}</span>
                    )}
                  </div>

                  <div className="mentor-actions">
                    <button 
                      onClick={() => openMentorModal(mentor)}
                      className="btn btn-primary"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="mentor-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Become a Mentor?</h2>
            <p>
              Share your knowledge and help the next generation of developers grow. 
              Join our mentor community and make a real impact.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">Apply to be a Mentor</a>
              <a href="#" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Modal */}
      {selectedMentor && (
        <div className="mentor-modal-overlay" onClick={closeMentorModal}>
          <div className="mentor-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeMentorModal}>×</button>
            
            <div className="modal-header">
              <img src={selectedMentor.avatar} alt={selectedMentor.name} className="modal-avatar" />
              <div className="modal-info">
                <h2>{selectedMentor.name}</h2>
                <p className="modal-title">{selectedMentor.title}</p>
                <p className="modal-company">@ {selectedMentor.company}</p>
                <p className="modal-location">📍 {selectedMentor.location}</p>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>About</h3>
                <p>{selectedMentor.bio}</p>
              </div>

              <div className="modal-section">
                <h3>Expertise</h3>
                <div className="modal-skills">
                  {selectedMentor.expertise.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Specialties</h3>
                <div className="modal-specialties">
                  {selectedMentor.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Languages</h3>
                <p>{selectedMentor.languages.join(', ')}</p>
              </div>

              <div className="modal-section">
                <h3>Availability</h3>
                <p>{selectedMentor.availability}</p>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary">Request Mentorship</button>
                <button className="btn btn-secondary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
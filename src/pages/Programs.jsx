import { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import './Programs.css';
import gsocLogo from '../assets/Gsoc.png';
import lfLogo from '../assets/linux.png';
import outreachyLogo from '../assets/outreachy.png';
import mlhLogo from '../assets/mlh.png';
import seasonofDocsLogo from '../assets/docs.png';
import githubLogo from '../assets/github.png';
import codeforgoodLogo from '../assets/jp.png';
import fossasiaLogo from '../assets/fossasia.png';


const Programs = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const programs = [
    {
      title: "Google Summer of Code",
      description: "Work on real-world projects with leading open source organizations during summer break. GSoC is a global program focused on introducing students to open source software development.",
      organization: "Google",
      duration: "12-22 weeks",
      stipend: "$3000-$6600",
      applicationDeadline: "March 2024",
      skills: ["Programming", "Open Source", "Git", "Documentation"],
      link: "https://summerofcode.withgoogle.com/",
      featured: true,
      category: "internship",
      logo: gsocLogo
    },
    {
      title: "LFX Mentorship",
      description: "Get mentored by experienced developers while contributing to Linux Foundation projects. Work on cutting-edge cloud native, networking, and edge technologies.",
      organization: "Linux Foundation",
      duration: "12 weeks",
      stipend: "$3000-$6000",
      applicationDeadline: "Rolling",
      skills: ["Linux", "Cloud", "DevOps", "Kubernetes"],
      link: "https://mentorship.lfx.linuxfoundation.org/",
      category: "mentorship",
      logo: lfLogo
    },
    {
      title: "Outreachy",
      description: "Provides internships to work on open source projects. Outreachy supports diversity in open source and tech by providing internships to underrepresented groups.",
      organization: "Outreachy",
      duration: "13 weeks",
      stipend: "$7000",
      applicationDeadline: "February & August",
      skills: ["Programming", "Documentation", "UX", "Translation"],
      link: "https://www.outreachy.org/",
      category: "internship",
      logo: outreachyLogo
    },
    {
      title: "MLH Fellowship",
      description: "A remote internship alternative for aspiring technologists. Fellows contribute to Open Source projects that power the world's software.",
      organization: "Major League Hacking",
      duration: "12 weeks",
      stipend: "Varies",
      applicationDeadline: "Rolling",
      skills: ["Web Development", "Mobile Apps", "DevOps", "Data Science"],
      link: "https://fellowship.mlh.io/",
      category: "fellowship",
      logo: mlhLogo
    },
    {
      title: "Season of Docs",
      description: "Brings technical writers and open source projects together to improve documentation. Writers work with mentors from open source organizations.",
      organization: "Google",
      duration: "3-5 months",
      stipend: "$2500-$15000",
      applicationDeadline: "April 2024",
      skills: ["Technical Writing", "Documentation", "Communication"],
      link: "https://developers.google.com/season-of-docs",
      category: "documentation",
      logo: seasonofDocsLogo
    },
    {
      title: "GitHub Campus Experts",
      description: "A program for student leaders passionate about growing the developer community at their school. Experts receive training and support.",
      organization: "GitHub",
      duration: "1 year",
      stipend: "Benefits & Swag",
      applicationDeadline: "Rolling",
      skills: ["Community Building", "Leadership", "Git", "Public Speaking"],
      link: "https://education.github.com/experts",
      category: "community",
      logo: githubLogo
    },
    {
      title: "Code for Good",
      description: "Annual hackathon where developers create solutions for non-profit organizations. Focus on using technology to solve social problems.",
      organization: "JPMorgan Chase",
      duration: "48 hours",
      stipend: "Prizes",
      applicationDeadline: "September",
      skills: ["Full-Stack Development", "Problem Solving", "Teamwork"],
      link: "https://www.jpmorgan.com/technology/code-for-good",
      category: "hackathon",
      logo: codeforgoodLogo

    },
    {
      title: "FOSSASIA Codeheat",
      description: "Contest for developers to contribute to FOSSASIA projects. Participants work on various open source projects throughout the contest period.",
      organization: "FOSSASIA",
      duration: "3 months",
      stipend: "Prizes & Swag",
      applicationDeadline: "October",
      skills: ["JavaScript", "Python", "Android", "Web Development"],
      link: "https://codeheat.org/",
      category: "contest",
      logo: fossasiaLogo
    }
  ];

  const categories = [
    { value: 'all', label: 'All Programs' },
    { value: 'internship', label: 'Internships' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'fellowship', label: 'Fellowships' },
    { value: 'documentation', label: 'Documentation' },
    { value: 'community', label: 'Community' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'contest', label: 'Contests' }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesFilter = filter === 'all' || program.category === filter;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="programs">
      {/* Header Section */}
      <section className="programs-header">
        <div className="container">
          <h1 className="programs-title">Open Source Programs</h1>
          <p className="programs-description">
            Discover amazing opportunities to contribute to open source projects, gain experience, 
            and connect with the global developer community.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="programs-filters">
        <div className="container">
          <div className="filters-row">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`filter-btn ${filter === category.value ? 'active' : ''}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="container">
          {filteredPrograms.length > 0 ? (
            <>
              <div className="results-count">
                {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} found
              </div>
              <div className="programs-grid">
                {filteredPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No programs found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setFilter('all'); setSearchTerm('');}}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join our community and get guidance on how to apply to these programs. 
              Our mentors can help you prepare your applications and increase your chances of success.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">Join Our Discord</a>
              <a href="#" className="btn btn-secondary">Get Mentorship</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
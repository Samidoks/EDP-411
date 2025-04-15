// src/pages/Resources.js
import React from 'react';

function Resources() {
  const resourceLinks = [
    { id: 1, title: 'Library Access', url: 'https://library.university.edu' },
    { id: 2, title: 'Online Journals', url: 'https://journals.example.com' },
    { id: 3, title: 'Career Services', url: 'https://careers.university.edu' },
  ];

  return (
    <div className="resources">
      <h2>Student Resources</h2>
      <ul>
        {resourceLinks.map(resource => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;

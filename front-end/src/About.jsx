import React, { useEffect, useState } from 'react'

const About = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => setAbout(data))
      .catch(error => console.error('Error fetches About Us:', error))
  }, [])

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>About Us</h1>

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img src={about.imageUrl} alt="James Huang" style={{ width: '300px', height: 'auto' }}/>
    </div>
  )
}

export default About
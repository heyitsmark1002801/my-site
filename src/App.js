import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <ProfileCircle />
        <GitHubCircle />
        <LinkedInCircle />
      </div>
    </div>
  );
}

function ProfileCircle() {
  const downloadResume = () => {
    // Replace 'resume.pdf' with the path to your PDF file
    const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'resume.pdf';
    anchor.click();
  };

  return (
    <div className="profile-circle" onClick={downloadResume}>
      <img src="profile_picture.jpg" alt="Profile" className="profile-picture" />
    </div>
  );
}

function GitHubCircle() {
  const openGitHub = () => {
    window.open("https://github.com/yourusername", "_blank");
  };

  return (
    <div className="github-circle" onClick={openGitHub}></div>
  );
}

function LinkedInCircle() {
  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/yourusername", "_blank");
  };

  return (
    <div className="linkedin-circle" onClick={openLinkedIn}></div>
  );
}

export default App;

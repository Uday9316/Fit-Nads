// src/Components/ArticleComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import { articleData } from '../Data/Data'; // Import the article data from Data.js
import logo from '../assets/chog.gif'; // Import the logo image
import './ArticleComponent.css'; // Import the CSS file for styling

// Custom Navbar for the article page
const ArticleNav = () => {
  return (
      <nav className="max-w-[1540px] m-auto py-6 px-6 max-lg:px-12 flex justify-between items-center gap-14 max-xl:gap-5 max-sm:py-4 max-sm:px-6">
        <Link to="/" className="font-semibold text-5xl flex justify-center items-center text-black gap-1">
          <img src={logo} alt="logo" width={60} height={60} />
          <span className="article-logo-text">FIT-NADS</span>
        </Link>

        {/* Custom Nav links for article page */}
        <ul className="article-navbar-links">
         
          {/* Add more links as needed */}
        </ul>
      </nav>
    
  );
};

const ArticleComponent = () => {
  // Check if articleData is defined and has the expected structure
  const title = articleData?.title || "Default Title"; // Fallback title
  const introduction = articleData?.introduction || "Default introduction."; // Fallback introduction

  return (
    <div>
      {/* Render the custom navbar for the article page */}
      <ArticleNav />

      {/* Article Content */}
      <div className="article-container">
        <h1 className="article-title">{title}</h1>

        <div className="article-introduction">
          <p>{introduction}</p>
        </div>

        {articleData?.misconceptions?.map((misconception, index) => (
          <div key={index} className="misconception">
            <h2>{misconception.title}</h2>
            <p>{misconception.content}</p>
          </div>
        ))}

        <h2 className="supplements-title">The Best Supplements!</h2>
        <ul className="supplements-list">
          {articleData?.bestSupplements?.map((supplement, index) => (
            <li key={index} className="supplement-item">
              <strong>{supplement.name}:</strong> {supplement.description}
            </li>
          ))}
        </ul>

    
        {articleData?.fitnessNutritionGuide?.sections?.map((section, index) => (
          <div key={index} className="guide-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}

        <div className="article-summary">
          <h3>Summary:</h3>
          <p>{articleData?.summary || "Default summary."}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

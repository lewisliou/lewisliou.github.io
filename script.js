// Script for smooth scrolling when clicking on navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor links in the navigation bar
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
  
        // Get the target section id from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        // Scroll smoothly to the target element
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust to offset the navbar height
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Optional: Change the active navigation link based on scroll position
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');
  
    let currentSection = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 60) {
        currentSection = section.id;
      }
    });
  
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  
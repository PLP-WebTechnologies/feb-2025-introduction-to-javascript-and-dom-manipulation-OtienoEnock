// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select the paragraph to change text and style
  const profileSection = document.querySelector('#Profile p');

  // Create buttons for interaction
  const changeTextBtn = document.createElement('button');
  changeTextBtn.textContent = 'Change Text & Style';
  changeTextBtn.style.margin = '10px';

  const toggleElementBtn = document.createElement('button');
  toggleElementBtn.textContent = 'Add/Remove Element';
  toggleElementBtn.style.margin = '10px';

  // Insert buttons into the DOM
  const header = document.querySelector('.header');
  header.appendChild(changeTextBtn);
  header.appendChild(toggleElementBtn);

  // Variable to track the added element
  let newElement = null;

  // Event listener for changing text and style
  changeTextBtn.addEventListener('click', () => {
    if (profileSection.textContent.includes('Enock Otieno')) {
      profileSection.textContent = 'Enock Otieno is an innovative engineer passionate about technology.';
      profileSection.style.color = 'white';
      profileSection.style.backgroundColor = 'green';
      profileSection.style.padding = '10px';
      profileSection.style.borderRadius = '5px';
    } else {
      profileSection.textContent = 'Enock Otieno is a highly adaptable, creative, and reliable Graduate Electrical and Electronics Engineer with extensive knowledge of:';
      profileSection.style.color = '';
      profileSection.style.backgroundColor = '';
      profileSection.style.padding = '';
      profileSection.style.borderRadius = '';
    }
  });

  // Event listener for adding/removing an element
  toggleElementBtn.addEventListener('click', () => {
    if (!newElement) {
      newElement = document.createElement('p');
      newElement.textContent = 'This is a dynamically added paragraph.';
      newElement.style.color = 'blue';
      newElement.style.fontStyle = 'italic';
      profileSection.parentNode.insertBefore(newElement, profileSection.nextSibling);
    } else {
      newElement.remove();
      newElement = null;
    }
  });
});

// opening all external links on new tab. 
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      try {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (e) {
        // Skip invalid URLs
      }
    });
  });
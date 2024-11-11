// JavaScript code to handle the modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker-card');
    const modal = document.getElementById('speaker-modal');
    const modalCloseButton = document.getElementById('modal-close');
    const modalName = document.getElementById('modal-name');
    const modalBio = document.getElementById('modal-bio');
  
    // Data to display in the modal (this can be dynamic from an API)
    const speakerData = {
      1: {
        name: 'John Doe',
        bio: 'John is an experienced software engineer with expertise in full-stack development...'
      },
      2: {
        name: 'Jane Smith',
        bio: 'Jane is a senior product designer with a passion for creating seamless user experiences...'
      },
      // More speaker data here
    };
  
    // Event listener for speaker card click
    speakerCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const speakerId = e.currentTarget.getAttribute('data-speaker-id');
        const speaker = speakerData[speakerId];
  
        // Populate modal with speaker details
        modalName.textContent = speaker.name;
        modalBio.textContent = speaker.bio;
  
        // Show the modal
        modal.style.display = 'flex';
      });
    });
  
    // Close the modal when the close button is clicked
    modalCloseButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal if clicked outside the content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
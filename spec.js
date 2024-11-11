function openPopup(imageSrc, name, role, company, bio) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupName').textContent = name;
    document.getElementById('popupRole').textContent = role;
    document.getElementById('popupCompany').textContent = company;
    document.getElementById('popupBio').textContent = bio;
  
    const popup = document.getElementById('speakerPopup');
    popup.style.display = 'flex';
  }
  
  function closePopup() {
    const popup = document.getElementById('speakerPopup');
    popup.style.display = 'none';
  }
  
  

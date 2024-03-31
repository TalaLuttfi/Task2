document.addEventListener('DOMContentLoaded', function() {
  const userForm = document.getElementById('userForm');
  const displayInfo = document.getElementById('displayInfo');
  const resetButton = document.getElementById('resetButton');

  userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userForm);
    
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const fullName = `${firstName} ${lastName}`;
    const email = formData.get('email');
    const phone = formData.get('phone');
    const dob = new Date(formData.get('dob')); // Convert to Date object
    const gender = formData.get('gender');
    const address = formData.get('address');
    
    const age = calculateAge(dob);

    if (age < 16) {
      alert('You must be at least 16 years old to submit this form.');
      return;
    }
    
    const cardHTML = `
      <div class="card dynamic-card">
        <div class="card-body">
          <h5 class="card-title">Welcome, ${fullName}</h5>
          <p class="card-text"><strong>Email:</strong> ${email}</p>
          <p class="card-text"><strong>Phone:</strong> ${phone}</p>
          <p class="card-text"><strong>Date of Birth:</strong> ${dob.toLocaleDateString()}</p>
          <p class="card-text"><strong>Age:</strong> ${age}</p>
          <p class="card-text"><strong>Gender:</strong> ${gender}</p>
          <p class="card-text"><strong>Address:</strong> ${address}</p>
        </div>
      </div>
    `;
    
    displayInfo.innerHTML = cardHTML;

    // Reset the form fields
    userForm.reset();
  });

  resetButton.addEventListener('click', function() {
    // Reset the form fields
    userForm.reset();
    // Clear the displayed info
    displayInfo.innerHTML = '';
  });

  function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
});

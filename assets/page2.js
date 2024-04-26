document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform basic validation
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }
  
    // You can add additional validation or authentication logic here
  
    // If validation passes, you can redirect or perform other actions
    

        window.location.href="page3.html";
  });

  
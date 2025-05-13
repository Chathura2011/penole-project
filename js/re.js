import { database } from './firebase-config.js';
import { ref, set } from "firebase/database";

const form = document.getElementById('registerForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Password length validation
password.addEventListener('input', function() {
    const hint = this.parentElement.querySelector('.password-hint');
    if (this.value.length < 6) {
        hint.style.display = 'block';
        this.classList.add('short-password');
        this.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        this.style.borderBottomColor = '#ff3333';
    } else {
        hint.style.display = 'none';
        this.classList.remove('short-password');
        this.style.backgroundColor = 'transparent';
        this.style.borderBottomColor = 'rgba(255, 215, 0, 0.3)';
    }
});

// Password match validation
confirmPassword.addEventListener('input', function() {
    const mismatch = this.parentElement.querySelector('.password-mismatch');
    if (this.value && password.value && this.value !== password.value) {
        mismatch.style.display = 'block';
        this.classList.add('mismatch');
        this.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        this.style.borderBottomColor = '#ff3333';
    } else {
        mismatch.style.display = 'none';
        this.classList.remove('mismatch');
        this.style.backgroundColor = 'transparent';
        this.style.borderBottomColor = 'rgba(255, 215, 0, 0.3)';
    }
});

// Form submission
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (password.value.length < 6) {
        password.classList.add('short-password');
        password.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        password.style.borderBottomColor = '#ff3333';
        return;
    }
    
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('mismatch');
        confirmPassword.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        confirmPassword.style.borderBottomColor = '#ff3333';
        return;
    }

    const userData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: password.value,
        registrationDate: new Date().toISOString()
    };

    try {
        await set(ref(database, 'users/' + userData.username), userData);
        document.getElementById('successMessage').classList.add('show');
        
        setTimeout(() => {
            window.location.href = 'penole.html';
        }, 2000);
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#actionBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("🎉 Button clicked!");
      document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
  }

  const signup = document.querySelector("#signupForm");
  if (signup) {
    signup.addEventListener("submit", (e) => {
      e.preventDefault();
      const pw = signup.querySelector('input[type="password"]').value;
      const pw2 = signup.querySelectorAll('input[type="password"]')[1].value;
      if (pw !== pw2) {
        alert("Passwords must match!");
      } else {
        alert("Signed up successfully!");
        signup.reset();
      }
    });
  }
});

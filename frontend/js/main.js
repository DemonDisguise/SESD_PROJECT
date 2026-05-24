document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("access_token");
  const authLink = document.getElementById("authLink");
  const heroButtons = document.getElementById("heroButtons");

  if (token) {
    // User is logged in
    authLink.innerHTML = `<a href="#" id="logoutLink">Logout</a>`;
    document.getElementById("logoutLink").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("access_token");
        window.location.reload();
    });

    if (heroButtons) {
      heroButtons.innerHTML = `<a href="./frontend/map.html" class="btn">Go to Map</a>`;
    }
  } else {
    // User not logged in
    authLink.innerHTML = `<a href="./frontend/login.html">Login</a>`;
    if (heroButtons) {
        heroButtons.innerHTML = `
          <a href="./frontend/login.html" class="btn">Login</a>
          <a href="./frontend/register.html" class="btn btn-outline">Register</a>
        `;
    }
  }
});

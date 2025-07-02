function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "civil") {
    window.location.href = "auth/general.html";
  } else if (input === "dept") {
    window.location.href = "auth/departments.html";
  } else if (input === "adminaccess") {
    window.location.href = "auth/admin.html";
  } else {
    alert("Invalid password.");
  }
}

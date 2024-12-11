function openPDF() {
  window.open("./Assets/Randhir_res.pdf", "_blank");
}

function showSidebar() {
  const accountIcon = document.getElementById("account");
  const sidebar = document.querySelector(".sidebar");
  const isSidebarVisible = sidebar.style.display === "block";

  sidebar.style.display = isSidebarVisible ? "none" : "block";
  accountIcon.src = isSidebarVisible ? "./Assets/icons8-account-80.png" : "./Assets/close.png";
}

function menuBtn() {
  const menuIcon = document.getElementById("menu");
  const navBar = document.querySelector('.navbar-responsive');
  const isNavBarVisible = navBar.style.display === "flex";

  navBar.style.display = isNavBarVisible ? "none" : "flex";
  menuIcon.src = isNavBarVisible ? "./Assets/menu.png" : "./Assets/close.png";
}

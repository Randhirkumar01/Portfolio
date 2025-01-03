function openPDF() {
  window.open("./Assets/Randhir_res.pdf", "_blank");
}

function showSidebar() {
  let accountIcon = document.getElementById("account");
  let sidebar = document.querySelector(".sidebar");
  let isSidebarVisible = sidebar.style.display === "block";

  sidebar.style.display = isSidebarVisible ? "none" : "block";
  accountIcon.src = isSidebarVisible ? "./Assets/briefcase-solid.svg" : "./Assets/close.png";
}

function menuBtn() {
  let menuIcon = document.getElementById("menu");
  let navBar = document.querySelector('.navbar-responsive');
  let isNavBarVisible = navBar.style.display === "flex";

  navBar.style.display = isNavBarVisible ? "none" : "flex";
  menuIcon.src = isNavBarVisible ? "./Assets/menu.png" : "./Assets/close.png";
}

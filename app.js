function openPDF() {
  window.open("./Assets/Randhir_res.pdf", "_blank");
}

// function showSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   if(sidebar.style.display === "block"){
//   sidebar.style.display = "none";
//   }
//   else{
//     sidebar.style.display = "block";
//   }
// }
function showSidebar()
{
  var account = document.getElementById("account");
  const sidebar = document.querySelector(".sidebar");
  if(sidebar.style.display === "block"){
    sidebar.style.display = "none";
    account.src = "./Assets/icons8-account-80.png";
  }
  else{
    sidebar.style.display = "block";
    account.src = "./Assets/close.png";
  }
}

function menubtn() {
  const navbar = document.querySelector(".responsive-navbar");
  var menu = document.getElementById("menu");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
    menu.src = "./Assets/menu.png";
  } else {
    navbar.style.display = "flex";
    menu.src = "./Assets/close.png";
  }
}

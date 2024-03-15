// let btn = document.querySelector('button');

// btn.addEventListener("click", () => {
//   window.location.href="./Assets/Resume.pdf";
// });

function  openPDF() { 
    const url = "./Assets/Resume.pdf";
    const win = window.open(url, '_blank');
    win.focus();  
} 
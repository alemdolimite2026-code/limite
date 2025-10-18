const modal = document.getElementById("videoModal");
const closeBtn = modal.querySelector(".close");
const iframe = document.getElementById("youtubeVideo");

function openModal(youtubeLink) {
  iframe.src = youtubeLink; // coloca o link do vídeo
  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = ""; // para parar o vídeo
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    iframe.src = "";
  }
});

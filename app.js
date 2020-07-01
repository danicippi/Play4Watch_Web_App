window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  //alert("sono pronto!")
  system_setup();
});

function system_setup(){
  const ilBottone = document.getElementById("start-me-up");
  ilBottone.addEventListener("click", (event)=>{
    start_application();
  })
  //console.log(ilBottone);
}

function start_application(){
  const intro= document.getElementById("intro");
  intro.className += " d-none";

  const series_card= document.getElementById("series-card");
  series_card.className = series_card.replace("d-none", "") ;
}
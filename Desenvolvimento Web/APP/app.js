function carregar(){
  var time = new Date();
  var hour =  time.getHours();
  var img =window.document.getElementById("img");
  var msg = window.document.getElementById("msg");
  msg.innerHTML = "Agora é/são " + hour +" hora(s)";
  if (hour >= 0 && hour < 12){

    img.src="CSS/Imagens/Foto-manhã.png"
    window.document.body.style.background ="#a79b07"
  } else if (hour >= 12 && hour < 18){

    img.src="CSS/Imagens/Foto-tarde.png"
    window.document.body.style.background = "#f1ae54"
  } else{

    img.src="CSS/Imagens/Foto-noite.png"
    window.document.body.style.background ="#003659"
  }
}

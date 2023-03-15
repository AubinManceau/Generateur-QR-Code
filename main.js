let generationQrCode = document.getElementById("generationQrCode")
let imgQrCode = document.getElementById("imgQrCode")
let input = document.getElementById("input")
let zoneQrCode = document.getElementById("zoneQrCode")
let telechargerQrCode = document.getElementById("telechargerQrCode")

function Generation(){
    if (input.value.length > 0){
        imgQrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        zoneQrCode.classList.remove('hidden')
        telechargerQrCode.classList.remove('hidden')
    }else{
        telechargerQrCode.classList.add('hidden')
        zoneQrCode.classList.add('hidden')
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error');
          }, 500);
    }
}

function Telechargement(){
        telechargerQrCode.href = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}


telechargerQrCode.classList.add('hidden')
zoneQrCode.classList.add('hidden')
generationQrCode.addEventListener("click", Generation)
telechargerQrCode.addEventListener("click", Telechargement)
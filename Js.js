const cardHTML = document.getElementById(`formSF`)

const cards =`
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com">
    </div>
    <div   div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="boton">
        <button type="submit" class="btn btn-primary custom-submit text-center">Enviar</button>
    </div>
    `
;     


formSF.innerHTML = cards;


function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}
const cardHTML = document.getElementById(`formSF`)

const cards =`
    <div class="mb-5 mx-5">
        <label for="exampleFormControlTextarea1" class="form-label text-light ">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Tú E-mail">
        </div>
        <div class="mb-3 mx-5">
        <label for="exampleFormControlTextarea1" class="form-label text-light">Comentario</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>`;     


formSF.innerHTML = cards;


function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}
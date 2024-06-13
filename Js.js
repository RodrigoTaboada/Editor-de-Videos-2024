const cardHTML = document.getElementById(`formSF`)

const cards =`
    <div class="field">
        <label for="from_name">Nombre</label>
        <input type="text" name="from_name" id="from_name">
    </div>
    <div class="field">
        <label for="message">Mensaje</label>
        <input type="text" name="message" id="message">
    </div>
    <div class="field">
        <label for="email_id">E-mail</label>
        <input type="text" name="email_id" id="email_id">
    </div>
    <div class="botonEnviar">
        <input type="submit" id="button" value="Enviar">
    </div>
        </form>

    `

formSF.innerHTML = cards;


function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}
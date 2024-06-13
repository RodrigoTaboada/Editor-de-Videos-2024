const cardHTML = document.getElementById(`formSF`)

const cards =`
    <form id="form">
    <div class="field">
        <label for="from_name">from_name</label>
        <input type="text" name="from_name" id="from_name">
    </div>
    <div class="field">
        <label for="message">message</label>
        <input type="text" name="message" id="message">
    </div>
    <div class="field">
        <label for="email_id">email_id</label>
        <input type="text" name="email_id" id="email_id">
    </div>
    <div class="field">
        <label for="reply_to">reply_to</label>
    </div>

    <input type="submit" id="button" value="Send Email">
    </form>
    `

formSF.innerHTML = cards;


function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}
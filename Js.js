
/* const video =`
    <video id="video1" controls class="w-100">
            <source src="./Videos/ANDBACK_Lesbia’s-Story_May2022_30secs.mp4" type="video/mp4">
        </video>

    ` */



function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}
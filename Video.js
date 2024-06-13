function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
}


body{
    margin: 0;
    padding: 0;
    background-color: #000000;
}

/* Nav-bar */
nav{
    display: flex;
    justify-content: end;
    padding-right: 4% ;
    background-color: #153448;
    color: white;
    font-family: "Poetsen One", sans-serif;
    align-content: center;
        
}


ul{
    margin: 0;
    padding: 1rem;
}

a{
    color:white;
    text-decoration: none;
}

@media only screen and (max-width: 320px) {
    nav{
        display: flex;
        justify-content: center;
}}

/* Titulo */

h1{
    font-family: "Bebas Neue", sans-serif;
    text-align: center;
    color: white;
    font-size: 5rem;

}

h2{
    font-family: "Bebas Neue", sans-serif;
    color: aliceblue;
}


/* Cards */

.cards{
    filter: drop-shadow(1px 1px 3px white);
    margin: 5% 1rem 8% 1rem;
    padding-bottom: 10%;
    padding-top: 15%;
    height: auto;
    position: fixed;
    
}

.card{
    width: 50%;
}

video{
    margin: 15% 0 15% 0;
}




/* Form */


.formSF{
        margin: 0 20% 0 20% ;
        padding-top: 15%;
}

.form-label{
    color: azure;
}
     

.boton{
    text-align: center;
}


/* Footer */

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #000000;

}





@media only screen and (max-width: 320px) {
    .formSF{
        margin: auto;
        padding-top: 10rem;
    }
    
}


.redesLink {
    display: inline-block;
    text-decoration: none;
    cursor: pointer; 
  }
  
  .redesLink img {
    vertical-align: middle; 
    width: 24px; 
    height: auto;
    
  }
  
  .redesLink:hover {
    text-decoration: underline; 
  }
  

  /* asdas */

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Poetsen+One&family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="Style/Style.css">
    <title> RT | Editor de videos</title>
    
</head>
<body>
    
    <header>    
        <nav>   
            <ul><a href="index.html">Home</a></ul>
            <ul><a href="videos.html">Videos</a></ul>
            <ul><a href="contacto.html">Contacto</a></ul>
        </nav>
    </header>

<!-- Header -->
    <div>
        <h1 class="">RT</h1>
        <h2 class="text-center text-light">Consultas</h2>
    </div>  
    
<!-- Form -->
    <div id="formSF" class="formSF">
    </div>

<!-- Footer -->
<footer class="bg-black text-center py-4">
    <div class="container">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <a href="https://www.instagram.com/" target="_blank" class="redesLink m-2">
                <img src="IMG/Iconos/instagram.png" alt="Instagram">                   
                </a>
                <a href="https://www.linkedin.com/in/rodritaboada/" target="_blank" class="redesLink m-2">
                <img src="IMG/Iconos/linkedin.png" alt="Instagram">                   
                </a>                  
        </ul>
        <p class="text-muted">&copy; 2024 RT Web Developer</p>
    </div>
</footer>

    <script src="Js.js"></script>
</body>
</html>


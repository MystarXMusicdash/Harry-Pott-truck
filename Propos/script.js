let traduction = 0;

document.getElementById("anglais").addEventListener ("click", function () {
    if (traduction == 0) {
        traduction = 1;
    document.getElementById("anglais").src="../Images/francais.jpg";
    document.getElementById("js1").textContent="About us";
    document.getElementById("js2").textContent="Our food truck basically consists of preparing and serving high quality meals with low prices so that everyone can enjoy our meals so that everyone can be reminded of this wonderful universe that is Harry Potter's.";
    document.getElementById("js3").textContent="We do all of this work just to put stars in people's eyes in Harry Potter's fans but also in people that don't quite know this universe.";
    document.getElementById("js4").textContent="Our suppliers are local farmers from around Rouen, making sure we provide our customers with qualitative food both tasteful and healthy.";
    document.getElementById("js5").textContent="Thanks to this we allow ourselves to serve you marvelous recipes able to make you drool.";
    }

    else {
        traduction = 0;
        document.getElementById("anglais").src="../Images/anglais.jpg";
        document.getElementById("js1").textContent="A propos de nous";
        document.getElementById("js2").textContent="Notre Food Truck consiste en simplement préparer et servir des repas de bonne qualité à des prix raisonnables pour que tout le monde puisse profiter de nos merveilleux repas basés sur le thème d'Harry Potter.";
        document.getElementById("js3").textContent="Tout cela pour apporter des étoiles dans les yeux des fans d'Harry Potter mais aussi des non-initiés afin de rappeler ce merveilleux univers.";
        document.getElementById("js4").textContent="Nous sommes fournis par les producteurs locaux de Rouen, avec une garantie de qualité que ce soit sanitaire et qualitatif.";
        document.getElementById("js5").textContent="Grâce à ceci nous nous permettons de vous offrir de merveilleuses recettes capable de vous faire saliver.";
    }

});
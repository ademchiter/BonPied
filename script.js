fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {

        // j'appelle ma fonction qui permet d'afficher ma bannière
        afficherBanniere(data)

        // j'appelle ma fonction qui permet d'afficher mes services
        afficherProduits(data)

        // j'appelle ma fonction qui permet d'afficher mes avantages
        afficherAvantages(data)

        // j'appelle ma fonction qui permet d'afficher mes services
        afficherServices(data)

        // j'appelle ma fonction qui permet d'afficher mes témoignages
        afficherTemoignages(data)
    })


/*
ROLE : AFFICHER MA BANNIERE
PARAMETRES : data
RETURN : RIEN
*/
function afficherBanniere(data) {

    // je récupère mes données et je les met dans mes variables
    let nomCommercial = data.nomCommercial;
    let baseLine = data.baseLine;
    let phraseAccroche = data.phraseAccroche;
    let texteAppelAction = data.texteAppelAction;

    //j'injecte mes données dans ma bannière 
    document.getElementById("section1").innerHTML += `     <div class="flex container space-between  align-center">
                <!-- la premiere div de ma banner -->
                <div class="w-48">

                    <h2 class="margin-top-40">${nomCommercial}</h2>
                    <h1 class="txtVert margin-top-20">${baseLine}</h1>
                    <p class="txtVert2 margin-top-10 policeRaleway">${phraseAccroche}</p>

                    <!-- bouton pour découvrir la collection -->
                    <a class="btn margin-top-10" href="">${texteAppelAction}</a>
                </div>
                <!-- la deuxième div de ma banner -->
                <div class="w-48">
                    <img src="asset/basketBanner.png" alt="" class="w-98 ">
                </div>
            </div>`


}

/*
ROLE : AFFICHER MES PRODUITS
PARAMETRES : data
RETURN : RIEN
*/
function afficherProduits(data) {

    // je récupère mes données et je les met dans mes variables
    let produits = data.produits;

    //pour chaque produit
    produits.forEach(produit => {

        //j'injecte mes données dans ma section produits
        document.getElementById("produits").innerHTML += `  
         
                <!-- ma premiere div produit -->
                <div class="w-33 card margin-top-15" data-aos="zoom-in"  data-aos-duration="700">
                    <img src="${produit.imageUrl}" class="w-98" alt="">
                    <p class="txtGras policeLato">${produit.nom}</p>
                    <div class="flex  margin-top-10 gap-10 policeRaleway prix ">
                      <div> <p "margin-top-20 ">$${produit.prix}</p> </div>  
                       
                      <div>  <p class="txtBarre">$${produit.prixAvantReduc} </p></div>  
                    </div>
                    <a class="btn2 margin-top-20" href="">En savoir plus</a>
                </div>
        

`    });

}

/*
ROLE : AFFICHER MES AVANTAGES CLIENTS
PARAMETRES : data
RETURN : RIEN
*/
function afficherAvantages(data) {

    // je récupère mes données et je les met dans mes variables
    let avantages = data.avantagesClients;

    // variable contenant la phrase qui s'affichera dans ma section avantages clients
    let phraseAvantage = "";

    // je boucle sur tout les avantages pour créer la phrase
    avantages.forEach(avantage => {
        phraseAvantage = phraseAvantage + `${avantage} | `
    });

    // j'injecte la phrase dans ma section Avantage
    document.getElementById("avantage").innerHTML += `${phraseAvantage}`


}

/*
ROLE : AFFICHER MES SERVICES
PARAMETRES : data
RETURN : RIEN
*/
function afficherServices(data) {

    // je récupère mes données et je les met dans mes variables
    let services = data.services;

    //pour chaque service
    services.forEach(service => {

        //j'injecte mes données dans ma section services
        document.getElementById("services").innerHTML += `  
         
                <!-- ma première div Nos services -->
                <div class="w-33 textCenter card " data-aos="fade-up" data-aos-duration="1500" data-aos-duration="700">
                    <i class="${service.classPhosphoreIcon}"></i>
                    <p class="txtGras margin-top-10">${service.nom}</p>
                    <p class="margin-top-10">${service.description}</p>
                </div>
  
        

`    });

}

/*
ROLE : AFFICHER MES TEMOIGNAGES
PARAMETRES : data
RETURN : RIEN
*/
function afficherTemoignages(data) {

    // je récupère mes données et je les met dans mes variables
    let temoignages = data.temoignages;

    //pour chaque temoignage
    temoignages.forEach(temoignage => {

        //je récupère la note et je la met dans la variable test
        let test = temoignage.note

        //ma variable contenant le nombre d'étoiles pour chaque témoignage
        let suiteEtoiles = ""

        // je boucle pour afficher le nombre d'étoiles
        for (let i = 1; i <= test; i++) {
            suiteEtoiles = suiteEtoiles + `<i class="ph-fill ph-star colorYellow"></i>`

        }

        //j'injecte mes données dans ma section témoignages
        document.getElementById("temoignages").innerHTML += `      
                   <div class="card w-33 textCenter" data-aos="flip-left" data-aos-duration="1500">
                <img src="${temoignage.imgUrl}" class="w-15 imageProfil">
                   <p class="txtGras ">${temoignage.prenom}</p>

                      <p class="margin-top-10"> ${suiteEtoiles}</p>
 
                        <p class="margin-top-10 txtItalic">${temoignage.typeExperience}</p>
                        <p class="margin-top-10" >${temoignage.commentaire}</p>
                    </div>

`    });

}

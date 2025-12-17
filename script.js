fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {

        // appeler afficherProduits
        //  afficherProduits(data)

        afficherProduits(data)

    })

function afficherProduits(data) {
    console.log(data)

    // je récupère mes données et je les met dans mes variables

    let nomCommercial = data.nomCommercial;
    let baseLine = data.baseLine;
    let phraseAccroche = data.phraseAccroche;
    let texteAppelAction = data.texteAppelAction;
    let produits = data.produits;
    let services = data.services;
    let temoignages=data.temoignages;


    //j'injecte mes données dans ma bannière 
    document.getElementById("section1").innerHTML += `     <div class="flex container space-between  align-center">
                <!-- la premiere div de ma banner -->
                <div class="w-48">

                    <h2>${nomCommercial}</h2>
                    <h1>${baseLine}</h1>
                    <p>${phraseAccroche}</p>

                    <!-- bouton pour découvrir la collection -->
                    <a class="btn" href="">${texteAppelAction}</a>
                </div>
                <!-- la deuxième div de ma banner -->
                <div class="w-48">
                    <img src="asset/basketBanner.png" alt="" class="w-98 ">
                </div>
            </div>`


            //pour chaque produit
    produits.forEach(produit => {
 
    //j'injecte mes données dans ma section produits
    document.getElementById("produits").innerHTML += `  
         
                <!-- ma premiere div produit -->
                <div class="w-33">
                    <img src="${produit.imageUrl}" class="w-98" alt="">
                    <p>${produit.nom}</p>
                    <div class="flex">
                       $<p>${produit.prix}</p> 
                    </div>
                    <a class="btn2" href="">En savoir plus</a>
                </div>
        

`    });

    //pour chaque service
    services.forEach(service => {

    //j'injecte mes données dans ma section services
    document.getElementById("services").innerHTML += `  
         
                <!-- ma première div Nos services -->
                <div class="w-33 textCenter card">
                    <i class="${service.classPhosphoreIcon}"></i>
                    <p class="txtGras">${service.nom}</p>
                    <p>${service.description}</p>
                </div>
  
        

`    });
    //pour chaque temoignage
    temoignages.forEach(temoignage => {

    
    let test=temoignage.note
    
    //ma variable contenant le nombre d'étoiles pour chaque témoignage
    let suiteEtoiles = ""
    
    // mon système d'étoile
    for (let i = 1; i <= test; i++) {
       suiteEtoiles= suiteEtoiles + `<i class="ph-fill ph-star colorYellow"></i>`
        
    }

    //j'injecte mes données dans ma section services
    document.getElementById("temoignages").innerHTML += `                     <div class="card w-33 textCenter">
                        <p>${temoignage.prenom}</p>

                      <p> ${suiteEtoiles}</p>
 
                        <p>${temoignage.typeExperience}</p>
                        <p>${temoignage.commentaire}</p>
                    </div>

`    });

     
}
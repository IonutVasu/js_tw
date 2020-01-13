
var jucatorii = ["Andrei Vlad", "Alex Pascanu", "Radu Boboc", "Andrei Ratiu", "Dennis Man", "Darius Olaru", "George Ganea", "Robert Moldoveanu"];
var arataFavoritii = false; //ca sa stie daca sa arate lista filtrata sau nu
window.onload = function(){
    arataJucatori(jucatorii);
};

let audio = new Audio("audio/Imnul Romaniei.mp3");
audio.load();
audio.play();

function arataJucatori(jucatori){
    let textJucatori = "";
    for(let i=0; i < jucatori.length; i++){
        let txt = "<li>" + jucatori[i];

        if(!arataFavoritii){    //baga la id indexul din vector al fiecarui jucator
            txt += "<input type=\"checkbox\" name='jucatori' id='" + i + "'></li>";
        }
        textJucatori += txt;
    }

    let btn = "<br><button onclick=\"arataFavoriti()\">\n" +
        "        Arata/Nu arata favoritii\n" +
        "    </button>";

    //rescrie de fiecare data continutul divului
    $("#jucatori").html(textJucatori + btn);
}

function arataFavoriti(){
    //isi inverseaza valoarea
    arataFavoritii = !arataFavoritii;
    if(arataFavoritii){
        let favoriti = [];
        //pentru fiecare jucator selectat, ia id-ul si il baga in vectorul cu jucatori favoriti
        $('#jucatori input[name="jucatori"]:checked').each(function () {
            favoriti = favoriti.concat(jucatorii[$(this).attr("id")]);
        });
        //apeleaza functia dar cu vectorul de jucatori favoriti
        arataJucatori(favoriti);
    }
    else{
        //apeleaza functia normal
        arataJucatori(jucatorii);
    }

}

function apiCall(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: 'GET',
        success: function(res) {
            alert(res.title);
        }
    });
}
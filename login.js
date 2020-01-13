
var intervalId = window.setInterval(schimbaCuloare, 5000);

function schimbaCuloare() {
    let litere = '0123456789ABCDEF';
    let culoare = '#';
    for (let i = 0; i < 6; i++) {
        culoare += litere[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = culoare;
}

function valideazaParola(){
    let parola = $("#pw").val();
    let textParolaInvalida = $("#invalidPwText");
    if(!eValida(parola)){
        textParolaInvalida.show();
    }
    else{
        textParolaInvalida.hide();
    }
}

function eValida(parola){
    let regex = new RegExp("^(.{0,7} | " +       //are mai putin de 8 caractere
        "[^0-9]* | " +       //nu are numere
        "[^A-Z]* | " +      //nu are litere mari
        "[^a-z]* |" +       //nu are litere mici
        "[a-zA-Z0-9]*)$");  //nu are caractere speciale
    return !regex.test(parola);
}

function inregistreaza(){
    let meciuri = [];
    $('#register-form input[name="meciuri"]:checked').each(function () {
        meciuri.push($(this).val());
    });

    //ia textul din casute prin jquery si formeaza un obiect
    let user = {
        username: $("#username").val(),
        password: $("#pw").val(),
        email: $("#email").val(),
        sex:  $('#register-form input[type=radio]:checked').val(),
        echipa: $('#echipa').val(),
        meciuri: meciuri,
        bunLaFotbal: $('#bunLaFotbal').val(),
    };

    //memoreaza userul in localstorage sub forma de json
    localStorage.setItem("user", JSON.stringify(user));
}

function verifica() {

    let usr = {
        username: $("#usrname").val(),
        password: $("#userPw").val(),
    };
    let user = JSON.parse(localStorage.getItem("user"));
    //ia userul memorat in localstorage si il compara cu ce s-a introdus la login
    if(usr.username === user.username && usr.password === user.password){
        logheaza();
    }
    else{
        alert("Nu e bine.");
    }
}

function logheaza(){
    //sterge elementele de care nu mai e nevoie
    $("#registration").remove();
    $("#login").remove();
    let butonHome = "<form action=\"home.html\">\n" +
        "    <input type=\"submit\" value=\"Home\" />\n" +
        "</form>";
    $('body').html(butonHome);
}

function showText(x){
    x.classList.remove("hidden");
}

function hideText(x){
    x.classList.add("hidden");
}

function LogIn(form){
    if (form.pwd.value == "qwertz"){
        //document.getElementById("userWelcome").innerHTML = "Hello " + form.uname.value;
        document.getElementById("btnLogin").disabled = true;
        document.getElementById("btnLogout").disabled = false;
        document.getElementById("btnAccount").disabled = false;
        document.getElementById("btnAccount").innerHTML = form.uname.value;
    } else{
        window.alert("Wrong Password!");
    }
    document.getElementById("hiddenNav").hidden = false;
}

function cancelLogin(){
    document.getElementById('divLogin').style.display='none';
    document.getElementById("hiddenNav").hidden = false;
}

function navLogin(){
    document.getElementById("hiddenNav").hidden = true;
    document.getElementById('divLogin').style.display='block';
}

function LogOut(){
    document.getElementById("userWelcome").innerHTML = "Welcome";
    document.getElementById("btnLogin").disabled = false;
    document.getElementById("btnLogout").disabled = true;
    document.getElementById("btnAccount").disabled = true;
    document.getElementById("btnAccount").innerHTML = "Account";
}

//More planet text slide 1
function showMoreSpace01(){
    if(document.getElementById("moreSpace01").hidden == true){
        document.getElementById("moreSpace01").hidden = false;
        document.getElementById("lessSpace01").hidden = true;
    } else if(document.getElementById("moreSpace01").hidden == false){
        document.getElementById("moreSpace01").hidden = true;
        document.getElementById("lessSpace01").hidden = false;
    }
}

//More planet text slide 2
function showMoreSpace02(){
    if(document.getElementById("moreSpace02").hidden == true){
        document.getElementById("moreSpace02").hidden = false;
        document.getElementById("lessSpace02").hidden = true;
    } else if(document.getElementById("moreSpace02").hidden == false){
        document.getElementById("moreSpace02").hidden = true;
        document.getElementById("lessSpace02").hidden = false;
    }
}

//More Stars text slide 1
function showMoreStar01(){
    if(document.getElementById("moreStar01").hidden == true){
        document.getElementById("moreStar01").hidden = false;
        document.getElementById("lessStar01").hidden = true;
    } else if(document.getElementById("moreStar01").hidden == false){
        document.getElementById("moreStar01").hidden = true;
        document.getElementById("lessStar01").hidden = false;
    }
}

//More Stars text slide 2
function showMoreStar02(){
    if(document.getElementById("moreStar02").hidden == true){
        document.getElementById("moreStar02").hidden = false;
        document.getElementById("lessStar02").hidden = true;
    } else if(document.getElementById("moreStar02").hidden == false){
        document.getElementById("moreStar02").hidden = true;
        document.getElementById("lessStar02").hidden = false;
    }
}


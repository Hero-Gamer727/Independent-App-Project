roomtype = "";
THEME = localStorage.getItem("theme");
console.log(THEME);
function bathroom(){
    roomtype = "bathroom";
    console.log(roomtype);
    // THEME = localStorage.getItem("theme");
    navigate();
    
}


function bedroom(){
    roomtype = "bedroom";
    // THEME = localStorage.getItem("theme");
    navigate();
}


function livingroom(){
    roomtype = "livingroom";
    // THEME = localStorage.getItem("theme");
    navigate();
}

function navigate(){
if(roomtype == "livingroom" && THEME == "cool"){
    window.location = "livingcool.html";

}else if(roomtype == "livingroom" && THEME == "warm"){
    window.location = "livingwarm.html";

}else if(roomtype == "livingroom" && THEME == "chic"){
    window.location = "livingchic.html";

}else if(roomtype == "livingroom" && THEME == "modern"){
        window.location = "livingmodern.html";

    }else if(roomtype == "bedroom" && THEME == "cool"){
        window.location = "bedcool.html";

    }else if(roomtype == "bedroom" && THEME == "warm"){
        window.location = "bedwarm.html";

    }else if(roomtype == "bedroom" && THEME == "chic"){
        window.location = "bedchic.html";
    }else if(roomtype == "bedroom" && THEME == "modern"){
        window.location = "bedmodern.html";

    }else if(roomtype == "bathroom" && THEME == "cool"){
        window.location = "bathcool.html";
    
    }else if(roomtype == "bathroom" && THEME == "warm"){
        window.location = "bathwarm.html";
   
    }else if(roomtype == "bathroom" && THEME == "chic"){
        window.location = "bathchic.html";
    
    }else if(roomtype == "bathroom" && THEME == "modern"){
        window.location = "bathmodern.html";
    }
}
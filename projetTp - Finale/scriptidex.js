window.addEventListener('scroll',(scrolling) => {
    var collection = document.getElementsByClassName("nav-properties");

    if(window.scrollY>600){
        document.getElementById('navID').style.backgroundColor="#e0b1cb";
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.color = "#000";
        }
    }else{
        document.getElementById('navID').style.backgroundColor="#000";
        collection = document.getElementsByClassName("nav-properties");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.color = "#FFF";
        }
    }
});

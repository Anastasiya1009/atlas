let liElems = document.querySelectorAll("li");
let items = [
    "png/menu_menu_0.png", 
    "png/menu_oblast_0.png", 
    "png/menu_admin_0.png", 
    "png/menu_dostoprim_0.png",
    "png/menu_prirod_0.png",
    "png/menu_rasten_0.png",
    "png/menu_zhivot_0.png"]
let items_hover = [
    "png/menu_menu_1.png", 
    "png/menu_oblast_1.png", 
    "png/menu_admin_1.png", 
    "png/menu_dostoprim_1.png",
    "png/menu_prirod_1.png",
    "png/menu_rasten_1.png",
    "png/menu_zhivot_1.png"]
let map = document.getElementById("map");
let item = document.getElementsByClassName("item");
let size_map_img = document.getElementById("size_map_img"); 
let button_resize_1 = "png/button_resize_1.png";
let button_resize_2 = "png/button_resize_2.png";
let header = document.getElementById("header_row");
let main = document.getElementById("main_row");
let size_map = document.getElementById("size_map"); 
let sidebar = document.getElementById("sidebar");
let wrapper = document.getElementsByClassName("wrapper");
let mediaQueryTablet = window.matchMedia('((min-device-width: 768px) and (max-device-width: 1024px))');
let mediaQuerySmart = window.matchMedia('((min-device-width: 320px) and (max-device-width: 480px))');


for (let i = 0; i < liElems.length; i++) {
    liElems[i].addEventListener("mouseenter", function (e) {
        map.src = this.dataset.img;   
    });
}

for (let j = 0; j < items.length; j++) {
    liElems[j].addEventListener("mouseenter", function (e) {
        item[j].src = items_hover[j];  
    });
    liElems[j].addEventListener("mouseleave", function (e) {
        item[j].src = items[j];    
    });
}


size_map_img.addEventListener("click", function() {    
    let link = document.querySelector("#map").src;
    if (size_map_img.getAttribute("src") == button_resize_1){   
                    
        size_map_img.src = button_resize_2; 
        sidebar.style = "margin-left: -230px; transition-property: margin-left; transition-duration: 1s;";
        header.style = "margin-top: -200px; transition-property: margin-top; transition-duration: 1s;"           
        size_map_img.style = "margin-top: 150px; transition-property: margin-top; transition-duration: 1s;"
        if (mediaQueryTablet.matches) {
            if(link.match(/\bmap_5\b/)){
            map.useMap = "#mapPlantsTablet"; 
        }  else{map.useMap = "";}
            sidebar.style = "margin-top: -250px; transition-property: margin-top; transition-duration: 1s;";
    size_map_img.style = "margin-top: 150px; transition-property: margin-top; transition-duration: 1s;"
        }
        else if (mediaQuerySmart.matches) {
            if(link.match(/\bmap_5\b/)){
            map.useMap = "#mapPlantsSmart"; 
        }  else{map.useMap = "";}
            sidebar.style = "margin-top: -250px; transition-property: margin-top; transition-duration: 1s;";
    size_map_img.style = "margin-top: 150px; transition-property: margin-top; transition-duration: 1s;"
        }    
        else if(link.match(/\bmap_5\b/)){
            map.useMap = "#mapPlants"; 
        }  else{map.useMap = "";}  
       
    }        

    else {
        map.useMap = "";
        size_map_img.src = button_resize_1; 
        sidebar.style = "margin-left: 0; transition-property: margin-left; transition-duration: 1s;"  
        header.style = "margin-top: 0; transition-property: margin-top; transition-duration: 1s;"  
        size_map_img.style = "margin-top: 0;transition-property: margin-top; transition-duration: 1s;"
        if (mediaQueryTablet.matches) {
            sidebar.style = "margin-top: 0; transition-property: margin-top; transition-duration: 1s;";
        size_map_img.style = "margin-top: 0; transition-property: margin-top; transition-duration: 1s;"
        }
        if (mediaQuerySmart.matches) {
            sidebar.style = "margin-top: 0; transition-property: margin-top; transition-duration: 1s;";
        size_map_img.style = "margin-top: 0; transition-property: margin-top; transition-duration: 1s;"
        }
    }                          
        });

    for (let i = 0; i < liElems.length; i++) {
        liElems[i].addEventListener("click", function () {
            let link = document.querySelector("#map").src;
            size_map_img.src = button_resize_2;
            sidebar.style = "margin-left: -250px; transition-property: margin-left; transition-duration: 1s;";
            header.style = "margin-top: -200px; transition-property: margin-top; transition-duration: 1s;"  
            size_map_img.style = "margin-top: 150px;transition-property: margin-top; transition-duration: 1s;"
            if (mediaQueryTablet.matches) {
                if(link.match(/\bmap_5\b/)){
                map.useMap = "#mapPlantsTablet"; 
            }  else{map.useMap = "";}
                sidebar.style = "margin-top: -250px; transition-property: margin-top; transition-duration: 1s;";
        size_map_img.style = "margin-top: 150px; transition-property: margin-top; transition-duration: 1s;"
            }
            else if (mediaQuerySmart.matches) {
                if(link.match(/\bmap_5\b/)){
                map.useMap = "#mapPlantsSmart"; 
            }  else{map.useMap = "";}
                sidebar.style = "margin-top: -250px; transition-property: margin-top; transition-duration: 1s;";
        size_map_img.style = "margin-top: 150px; transition-property: margin-top; transition-duration: 1s;"
            }    
            else if(link.match(/\bmap_5\b/)){
                map.useMap = "#mapPlants"; 
            }  else{map.useMap = "";}  
        });
    }

    
var Arrey = ["Chilli","Cheesy","Mushroom"];
function Menu(){
    var res = "";
    var Icon = '<img class="im1"src="item_1.png" style="width: 100px; height: 100px;">';
    for(var i=0;i<Arrey.length;i++){
        res=res+Icon+Arrey[i]+"<br>";
        
    };
    document.getElementById("menuu").innerHTML=res;
};

function Add(){
    var text=document.getElementById("recom").value;
    Arrey.push(text)
};
function MenuShow(){
    var res;
    
    var Icon = '<img class="im1"src="item_1.png" style="width: 100px; height: 100px">';
    var text=document.getElementById("recom").value;
    res = "";
    for(var i=0;i<Arrey.length;i++){
        res=res+Icon+Arrey[i]+"<br>";
        
    };
    document.getElementById("menuuu").innerHTML=res;
};
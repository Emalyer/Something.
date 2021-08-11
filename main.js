var one=[];
var two=[];

function display_one(){
    for(var i=1;i<=6;i++){
        name_one=document.getElementById("one_"+i).value;
        one.push(name_one);
    }
    document.getElementById("display_1").innerHTML=one;
}

function display_two(){
    for(var i=1;i<=6;i++){
        name_two=document.getElementById("two_"+i).value;
        two.push(name_two);
    }
    document.getElementById("display_two").innerHTML=two;
}
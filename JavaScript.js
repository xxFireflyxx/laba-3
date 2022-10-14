function city()
{
    if (confirm('Где родился?')){
        var namecity = prompt('Так, пиши тут','');
    }
    alert("Ага, мы знаем откуда ты...")

    document.getElementById("city").innerHTML = namecity;
}
function color()
{
    
    alert("Работает")
    document.getElementById("color1").style.background ="white";
    document.getElementById("color2").style.background ="blue";
    document.getElementById("color3").style.background ="red";
    document.getElementById("color1").style.color ="black";
}
function gender()
{
    var ava = document.getElementById('photo');
    ava.setAttribute('src','gigi.png');
}
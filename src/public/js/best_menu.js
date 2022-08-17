var arrow = document.getElementsByClassName( 'arrow' );
var img = document.getElementsByClassName( 'bm' );
var l = 0;
arrow[1].onclick = function() {
    l++;
    for(var i of img)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2220px";}
        if (l==4) {i.style.left = "-2960px";}
        if (l>4) {l=4;}
    }
};
arrow[0].onclick = function() {
    l--;
    for(var i of img)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2220px";}
        if (l<0) {l=0;}
    }
};

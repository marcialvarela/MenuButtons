/**
 * Created by mvarela on 12/06/2015.
 */

//alert('Pantalla ... Width: ' + screen.width + '  Height: ' + screen.height);

var wS = screen.width - 100;
var hS = screen.height - 100;

tamanyoBoton(4, 1);

calculate_ratio();

function gcd (a, b) {
    return (b == 0) ? a : gcd (b, a%b);
}

function calculate_ratio()
{
    var w = screen.width;
    var h = screen.height;
    var r = gcd (w, h);

    //document.write ("<pre>");
    //document.write ("Dimensions = ", w, " x ", h, "<br>");
    //document.write ("Gcd        = ", r, "<br>");
    //document.write ("Aspect     = ", w/r, ":", h/r);
    //document.write ("</pre>");

    rW = w/r;
    rH = h/r;
    return (rW + ":" + rH);
}

function tamanyoBoton(i, j){
    document.getElementById('btn11').width = wS / i;
    document.getElementById('btn11').height = wS / i;
    document.getElementById('btn12').width = wS / i;
    document.getElementById('btn12').height = wS / i;
    document.getElementById('btn13').width = wS / i;
    document.getElementById('btn13').height = wS / i;
    document.getElementById('btn14').width = wS / i;
    document.getElementById('btn14').height = wS / i;

    document.getElementById('btn21').width = wS / i;
    document.getElementById('btn21').height = wS / i;
    document.getElementById('btn22').width = wS / i;
    document.getElementById('btn22').height = wS / i;
    document.getElementById('btn23').width = wS / i;
    document.getElementById('btn23').height = wS / i;

}

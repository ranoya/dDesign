let samaberto = false;

openSam = function () {

    if (samaberto) {
        document.getElementById('samdialogbox').style.right = "-420px";
        samaberto = false;
    } else {
        document.getElementById('samdialogbox').style.right = 0;
        samaberto = true;
    }

}
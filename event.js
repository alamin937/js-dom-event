function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = make;

function make(){
    document.body.style.backgroundColor = 'blue';
}


const makeYellow = document.getElementById('make-yellow');
makeYellow.onclick = function yellow(){
    document.body.style.backgroundColor = 'yellow';
}

const makeGolden = document.getElementById('make-golden');
makeGolden.addEventListener = ('click', golden);

function golden(){
    document.body.style.backgroundColor = 'pink';
}
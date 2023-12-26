const bar = document.getElementById('bar');
const colse = document.getElementById('close');
const nar = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() => {
        nav.classlist.add('active');
    })
}

if (close){
    colse.addEventListener('click',() => {
        nav.classlist.remove('active');
    })
}
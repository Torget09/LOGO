let bt = document.querySelector('.bt');
let span = document.querySelector('.span');
let i = document.querySelector('.i');
let link = document.querySelector('.link');
let form = document.querySelector('.form');

bt.addEventListener('click', function(){
    if(bt.classList.contains('bit')){
        bt.classList.remove('bit')
    } else {
        bt.classList.add('bit');
    }
});

span.addEventListener('click', function(){
    if (i.classList.contains('fa-x')) {
        i.classList.remove('fa-x')
        link.classList.remove('d')
        form.classList.remove('k')
    } else {
        i.classList.add('fa-x')
        link.classList.add('d')
        form.classList.add('k')
    }
});
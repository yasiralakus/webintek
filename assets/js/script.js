let language = document.querySelector('#language');
let english = document.querySelector('#english');

function toggleNav() {
    english.classList.toggle('hidden')
}

language.addEventListener('click', toggleNav)
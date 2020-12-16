const btnSearch = document.querySelector('button.btn');
const search = document.querySelector('div.search');
btnSearch.addEventListener('click', () => {
    if (search.classList.contains('active')) search.classList.remove('active');
    else search.classList.add('active');
});
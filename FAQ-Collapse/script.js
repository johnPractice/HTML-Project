const btns = document.querySelectorAll('.faq-container button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleBtn(btn.parentElement);
    });
});

function toggleBtn(p) {
    // console.log(p);
    if (p.classList.contains('active')) p.classList.remove('active');
    else p.classList.add('active');
}
const sounds = document.querySelectorAll('audio');
document.querySelector('body').addEventListener('click', (e) => {
    const target = e.target;
    if (!target.classList.contains('btn')) stopSongs();
});
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound.getAttribute('id');
    btn.addEventListener('click', () => {
        stopSongs();
        sound.play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        sound.pause();
    });
}
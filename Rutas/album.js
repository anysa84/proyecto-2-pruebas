document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        const songSrc = this.parentElement.getAttribute('data-src');
        const audioPlayer = document.getElementById('audioPlayer');
        if (audioPlayer.src !== songSrc) {
            audioPlayer.src = songSrc;
        }
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
});

document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        window.location.href = link;
    });
});

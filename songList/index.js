document.addEventListener('DOMContentLoaded', function() {
    const plays = document.querySelectorAll('.play');

    plays.forEach(play => {
        play.addEventListener('click', function() {
            const audio = this.querySelector('audio');

            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio) a.pause();
            });

            if (audio.paused) {
                audio.play();
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
            } else {
                audio.pause();
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
            }
        });
    });
});

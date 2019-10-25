var e = ['🌑', '🌘', '🌗', '🌖', '🌕'],
        video;

    function formatTime(seconds) {
        var minutes = Math.floor(seconds/60),
            seconds = Math.floor(seconds - (minutes*60));

        return ('0'+minutes).substr(-2) + ':' + ('0'+seconds).substr(-2);
    }

    function renderProgressBar() {
        var s = '',
            c = 0,
            l = 10,
            p = Math.floor(video.currentTime / video.duration * ((l*5)-1)),
            i;

        while (p >= 5) {
            s += e[4];
            c ++;
            p -= 5;
        }
        s += e[p];
        c ++;

        while (c < l) {
            s += e[0];
            c ++;
        }

        location.hash = s+formatTime(video.currentTime)+'╱'+formatTime(video.duration);
    }

    video = document.getElementById('video');
    video.addEventListener('timeupdate', renderProgressBar);
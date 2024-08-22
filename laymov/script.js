document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', fadeIn);

    function fadeIn() {
        var fadeIns = document.querySelectorAll('.fade-in');
        for (var i = 0; i < fadeIns.length; i++) {
            var elem = fadeIns[i];
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
            if (distInView < 0) {
                elem.classList.add('in-view');
            } else {
                elem.classList.remove('in-view');
            }
        }
    }

    fadeIn();
});

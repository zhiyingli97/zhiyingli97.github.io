$(document).ready(function() {
    // Expand/collapse the AI Highlights panel of a publication card.
    $('.ai-highlights-toggle').click(function() {
        var open = this.getAttribute('aria-expanded') !== 'true';
        this.setAttribute('aria-expanded', open);
        $(document.getElementById(this.getAttribute('aria-controls'))).toggleClass('open', open);
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    // Publish each card's height (--card-h) so its hover scale can reserve
    // matching margin; kept current as cards resize (e.g. AI Highlights opening).
    if (window.ResizeObserver) {
        var cardSizes = new ResizeObserver(function(entries) {
            entries.forEach(function(entry) {
                entry.target.style.setProperty('--card-h', entry.target.offsetHeight + 'px');
            });
        });
        $('.card.hoverable').each(function() { cardSizes.observe(this); });
    }
    // Apple TV-style parallax: tilt cards towards the pointer (--tilt-x/y run
    // from -0.5 to 0.5) and let the liquid-glass glare follow it.
    $('.card.hoverable').on('pointermove', function(e) {
        if (e.pointerType !== 'mouse') return;
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        this.style.setProperty('--glare-x', x + 'px');
        this.style.setProperty('--glare-y', y + 'px');
        this.style.setProperty('--tilt-x', (x / rect.width - 0.5).toFixed(3));
        this.style.setProperty('--tilt-y', (y / rect.height - 0.5).toFixed(3));
        // Glowing edge: pointer direction from the centre (0deg = up) and how
        // close it is to the nearest edge (0 at the centre, 1 at the edge).
        var dx = x - rect.width / 2, dy = y - rect.height / 2;
        this.style.setProperty('--pointer-angle', (Math.atan2(dy, dx) * 180 / Math.PI + 90).toFixed(1) + 'deg');
        this.style.setProperty('--pointer-edge', Math.min(1, Math.max(Math.abs(dx) / (rect.width / 2), Math.abs(dy) / (rect.height / 2))).toFixed(3));
    }).on('pointerleave', function() {
        this.style.setProperty('--tilt-x', 0);
        this.style.setProperty('--tilt-y', 0);
    });
});

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
    // from -0.5 to 0.5) and let the liquid-glass glare follow it. Pointer
    // events can outpace the display, so only the latest one is applied, once
    // per frame; reading the rect there also avoids a forced layout per event.
    function trackPointer(card, e) {
        card._pointer = e;
        if (card._pointerFrame) return;
        card._pointerFrame = requestAnimationFrame(function() {
            card._pointerFrame = 0;
            var e = card._pointer;
            if (!e) return;
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left, y = e.clientY - rect.top;
            card.style.setProperty('--glare-x', x + 'px');
            card.style.setProperty('--glare-y', y + 'px');
            card.style.setProperty('--tilt-x', (x / rect.width - 0.5).toFixed(3));
            card.style.setProperty('--tilt-y', (y / rect.height - 0.5).toFixed(3));
            // Glowing edge: pointer direction from the centre (0deg = up) and how
            // close it is to the nearest edge (0 at the centre, 1 at the edge).
            var dx = x - rect.width / 2, dy = y - rect.height / 2;
            card.style.setProperty('--pointer-angle', (Math.atan2(dy, dx) * 180 / Math.PI + 90).toFixed(1) + 'deg');
            card.style.setProperty('--pointer-edge', Math.min(1, Math.max(Math.abs(dx) / (rect.width / 2), Math.abs(dy) / (rect.height / 2))).toFixed(3));
        });
    }
    $('.card.hoverable').on('pointermove', function(e) {
        if (e.pointerType !== 'mouse') return;
        trackPointer(this, { clientX: e.clientX, clientY: e.clientY });
    }).on('pointerleave', function() {
        // Drop a pending frame so it can't re-tilt the card after it is left.
        this._pointer = null;
        this.style.setProperty('--tilt-x', 0);
        this.style.setProperty('--tilt-y', 0);
    });
});

$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    // Let the liquid-glass glare on publication cards follow the pointer.
    $('.publications .card.hoverable').on('pointermove', function(e) {
        var rect = this.getBoundingClientRect();
        this.style.setProperty('--glare-x', (e.clientX - rect.left) + 'px');
        this.style.setProperty('--glare-y', (e.clientY - rect.top) + 'px');
    });
});

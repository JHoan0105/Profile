function draw() {
    var canvas = $('canvas')[0];
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0,0.5)';
        ctx.fillRect(10, 10, 175, 25);
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(10, 30, 50, 50);
    }
}

$(document).ready(function() {
    // $(document).draw();
    $('#content').animate({
        opacity:1,
        marginTop:'0',
    }, 800);
    $('h2').click(function() {
        $(this).next('.subtext').slideToggle('fast');
        $(this).children('.hex').toggleClass('moved');
    })
});
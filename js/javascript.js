    $(document).ready(function(){

    $('.valentines-day').click(function(){

        $(this).addClass('open');

        setTimeout(function(){
        $('.valentines-day').hide();
        $('#card').addClass('show');
        crearPetalos();
        }, 900);
        

    });

    function crearPetalos(){
        for(let i=0; i<20; i++){
        let petalo = $('<div class="petalo"></div>');
        petalo.css({
            left: Math.random()*100 + 'vw',
            animationDuration: (Math.random()*3 + 3) + 's'
        });
        $('body').append(petalo);
        }
    }

    });
    
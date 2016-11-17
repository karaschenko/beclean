$(document).ready(function(){
    $('.works-list__item').height(function(){
        return $('.works-list__item').width()*1;
    });
    $('.team-list-item').height(function(){
        return $('.team-list-item').width()*1.24;
    });
    $(".tabs-control__item").on('click', function(e) {
        e.preventDefault();
        var item =  $(this);
        var currentItem = $(".tabs-list__item");
        var itemPosition = item.index();
        item.addClass('primary').siblings().removeClass('primary');
        currentItem.eq(itemPosition).add(item).addClass('active').siblings().removeClass('active');
    });

    $(".reviews-list").owlCarousel({
        navigation : true,
        pagination : true,
        autoPlay: true,
        items : 2,
        itemsDesktop : [1170],
        navigationText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        itemsDesktopSmall : [1170]

    });
    $(".reviews-list .owl-controls").addClass('customPagination');

})
$( window ).resize(function() {
    $('.works-list__item').height(function(){
        return $('.works-list__item').width()*1;
    });
    $('.team-list-item').height(function(){
        return $('.team-list-item').width()*1.24;
    });

});

$(document).ready(function() {

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
    });

});



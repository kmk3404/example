var allVideo = $('.video');
var allplay = $('#play-all');
var video;

/* allVideo.hover(
    function(){
        마우스가 진입했을때 실행문
    }, function(){
        마우스가 벗어났을때 실행문
    }
) */

allVideo.hover(
    function(){
         video=$(this).find('video');
         console.log(video.get(0));
         /* html요소(body, header, div, h1,em...)
         get(0) = html요소의 첫번째요소를 불러온다는 의미
         .eq(index번호)-> jquery객체의 순서를 의미 */

         video.get(0).play();
    }, function(){
         video.get(0).pause();
    }
)

allplay.click(function(){
    if(allplay.hasClass('on')){
        var vd = $('video');
        allplay.removeClass('on');
        $('#play-all .play-all').text('Pause All');
        for(var i = 0; i < vd.length; i++){
            vd.get(i).play();
        }
    }else{
        var vd = $('video');
        allplay.addClass('on');
        $('#play-all .play-all').text('Play All');
        for(var i = 0; i < vd.length; i++){
            vd.get(i).pause();
        }
    }
})
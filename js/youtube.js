// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '86gToHFkbiU', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동재생 유무
      loop: true, // 반복재생 유무, 다시 반복해서 재생할 영상 아이디를 아래 꼭 써줘야함
      playlist: '86gToHFkbiU' // 반복해서 재생할 유튜브 영상 Id목록
    },
    events: {
      onReady: function (event) { //영상이 준비되면 익명의 함수가 실행되고,
        event.target.mute() //target:재생되고있는 영상 자체, mute:음소거 처리하겠다는 명령
      }
    }
  });
}

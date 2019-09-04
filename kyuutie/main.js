// JavaScript Document
var subOn = true;
var track = 'opening_kar.ass';



function setup() {
	videojs('video').ready(function () {
        // This would look more nice as a plugin but is's just as showcase of using with custom players
        var video = this.tech_.el_;
        window.SubtitlesOctopusOnLoad = function () {
            var options = {
                video: video,
                subUrl: track,
                fonts: ['OpenSans.ttf', 'KGFirstTimeInForever-Regular.ttf', 'NotoSansJP-Bold.otf'],
                //onReady: onReadyFunction,
                //debug: true,
                workerUrl: 'subtitles-octopus-worker.js'
            };
            window.octopusInstance = new SubtitlesOctopus(options); // You can experiment in console
        };
        if (SubtitlesOctopus) {
            SubtitlesOctopusOnLoad();
        }
    });
	updateMetadata();
};
//['opening_cred.ass', 'opening_kar.ass', 'opening_kar_jp.ass', 'opening_kar+cred.ass']
function toggleSubtitles() {
	if (document.getElementById("subactive").value === "None") {
		octopusInstance.freeTrack();

	} else if (document.getElementById("subactive").value === "Lyrics") {
		track = 'opening_kar.ass';
        octopusInstance.setTrackByUrl(track);

	} else if (document.getElementById("subactive").value === "Credits") {
		track = 'opening_cred.ass';
        octopusInstance.setTrackByUrl(track);

	} else if (document.getElementById("subactive").value === "Lyrics | Credits") {
		track = 'opening_kar+cred.ass';
        octopusInstance.setTrackByUrl(track);

	} else if (document.getElementById("subactive").value === "kashi") {
		track = 'opening_kar_jp.ass';
        octopusInstance.setTrackByUrl(track);
        
	}
}

function pauseVideo() {
	var videojsPlayer = videojs('video');
	videojsPlayer.pause();
}

function playVideo() {
	var videojsPlayer = videojs('video');
	videojsPlayer.play();
}

navigator.mediaSession.setActionHandler('play', function() {
  playVideo();
});

navigator.mediaSession.setActionHandler('pause', function() {
  pauseVideo();
});

function updateMetadata() {
	navigator.mediaSession.metadata = new MediaMetadata({
    title: '†吸tie Ladies†',
    artist: 'ソフィー・トワイライト(CV:富田美憂)、天野灯(CV:篠原侑)、夏木ひなた(CV:Lynn)、エリー(CV:和氣あず未)',
    artwork: [{ src: 'https://i.imgur.com/EdJz8NO.jpg', sizes: '500x499', type: 'image/jpg' },]
  });
}
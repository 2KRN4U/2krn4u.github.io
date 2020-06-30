// JavaScript Document
var track = 'opening.ass';
var curTitle = 'まっしろわーるど';
var curAlbum = 'まっしろわーるど';
var curArt = [{src: 'https://i.imgur.com/vkw4Kra.jpg', sizes: '500x494', type: 'image/jpg'}, ];
var curArtist = 'みかくにんぐッ!';
var videojsPlayer;

function setup() {
	videojs('video').ready(function () {
        // This would look more nice as a plugin but is's just as showcase of using with custom players
        var video = this.tech_.el_;
        window.SubtitlesOctopusOnLoad = function () {
            var options = {
                video: video,
                subUrl: 'opening.ass',
                fonts: ['OpenSans.ttf'],
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
    videojsPlayer = videojs('video');
};

function toggleSubtitles() {
    if (document.getElementById("subactive").value === "None") {
        octopusInstance.freeTrack();

    } else if (document.getElementById("subactive").value === "Lyrics") {
        track = 'opening.ass';
        octopusInstance.setTrackByUrl(track);
    }
}

navigator.mediaSession.setActionHandler('play', function() {
    videojsPlayer.play();
});

navigator.mediaSession.setActionHandler('pause', function() {
    videojsPlayer.pause();
});

function updateMetadata() {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: curTitle,
        artist: curArtist,
        album: curAlbum,
        artwork: curArt
    });
}
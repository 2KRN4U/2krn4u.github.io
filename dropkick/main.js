// JavaScript Document
var track = 'opening.ass';
var curTitle = 'ガヴリールドロップキック';
var curAlbum = 'ガヴリールドロップキック';
var curArt = [{src: 'https://i.imgur.com/3wKIwqC.jpg', sizes: '500x496', type: 'image/jpg'}, ];
var videojsPlayer;
var curVid = 0;

function setup() {
	videojs('video').ready(function () {
        // This would look more nice as a plugin but is's just as showcase of using with custom players
        var video = this.tech_.el_;
        window.SubtitlesOctopusOnLoad = function () {
            var options = {
                video: video,
                subUrl: track,
                fonts: ['OpenSans.ttf', 'jhb.ttf', 'p.ttf', 'fph.ttf'],
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

    } else if (curVid == 0) {
        if (document.getElementById("subactive").value === "Lyrics") {
            track = 'opening.ass';
            octopusInstance.setTrackByUrl(track);

        } 

    } else if (curVid == 1) {
        if (document.getElementById("subactive").value === "Lyrics") {
            track = 'ending.ass';
            octopusInstance.setTrackByUrl(track);
		}
    }
}

navigator.mediaSession.setActionHandler('play', function() {
    videojsPlayer.play();
});

navigator.mediaSession.setActionHandler('pause', function() {
    videojsPlayer.pause();
});

navigator.mediaSession.setActionHandler('nexttrack', function() {
    if (curVid == 0){
		changeVideoED();
	} else {
		changeVideoOP();
	}
});

navigator.mediaSession.setActionHandler('previoustrack', function() {
    if (curVid == 0){
		changeVideoED();
	} else {
		changeVideoOP();
	}
});

function updateMetadata() {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: curTitle,
        artist: 'ガヴリール(CV.富田美憂)、ヴィーネ(CV.大西沙織)、サターニャ(CV.大空直美)、ラフィエル(CV.花澤香菜)',
        album: curAlbum,
        artwork: curArt
    });
}

function changeVideoOP() {
    if (curVid == 1) {
        curTitle = 'ガヴリールドロップキック';
		curAlbum = 'ガヴリールドロップキック';
		curArt = [{src: 'https://i.imgur.com/3wKIwqC.jpg', sizes: '500x496', type: 'image/jpg'}, ];
		document.title = "Gabriel DropKick | ガヴリールドロップキック";
        videojsPlayer.src("https://animethemes.moe/video/GabrielDropout-OP1-NCBD1080.webm");
		document.getElementById("subactive").innerHTML = "";
		document.getElementById("subactive").innerHTML = "<option>Lyrics</option><option>None</option>";
		updateMetadata();
		curVid = 0;
		toggleSubtitles();
		videojsPlayer.play();
    }
}

function changeVideoED() {
    if (curVid == 0) {
        curTitle = 'ハレルヤ☆エッサイム';
		curAlbum = 'ハレルヤ☆エッサイム';
		curArt = [{src: 'https://i.imgur.com/oLulWUh.jpg', sizes: '500x500', type: 'image/jpg'}, ];
		document.title = "Hallelujah Essaim | ハレルヤ☆エッサイム";
        videojsPlayer.src("https://animethemes.moe/video/GabrielDropout-ED1-NCBD1080.webm");
		document.getElementById("subactive").innerHTML = "";
		document.getElementById("subactive").innerHTML = "<option>Lyrics</option><option>None</option>";
		updateMetadata();
		curVid = 1;
		toggleSubtitles();
		videojsPlayer.play();
    }
}
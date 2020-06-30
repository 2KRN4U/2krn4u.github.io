// JavaScript Document
var track = 'opening.ass';
var curTitle = '青空のラプソディ';
var curAlbum = '青空のラプソディ';
var curArt = [{src: 'https://i.imgur.com/DExPG8h.jpg', sizes: '500x500', type: 'image/jpg'}, ];
var curArtist = 'fhána';
var videojsPlayer;
var curVid = 0;

function setup() {
	videojs('video').ready(function () {

        var video = this.tech_.el_;
        window.SubtitlesOctopusOnLoad = function () {
            var options = {
                video: video,
                subUrl: track,
                fonts: ['fonts/adb.otf', 'fonts/AltonaBold.otf', 'fonts/ARISTON1.TTF', 'fonts/comicbd.ttf', 'fonts/eirm.ttf', 'fonts/HWYGWDE.TTF', 'fonts/lexib.TTF', 'fonts/OLDENGL.TTF', 'fonts/oot.ttf', 'fonts/Retropop.otf', 'fonts/sr.ttf', 'fonts/sfab.ttf', 'fonts/sfjc.ttf', 'fonts/sb.ttf', 'fonts/Splash.ttf', 'fonts/URWAlcuinT.ttf', 'fonts/arial.ttf', 'fonts/armtb.ttf', 'fonts/BlambotPro.ttf', 'fonts/ccz.ttf', 'fonts/CoreRhino35Light.otf', 'fonts/fp.otf', 'fonts/fr1.ttf', 'fonts/rbt.ttf', 'fonts/rh.ttf'],
                //onReady: onReadyFunction,
                //debug: true,
                workerUrl: 'subtitles-octopus-worker.js'
            };
            window.octopusInstance = new SubtitlesOctopus(options);
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
        artist: curArtist,
        album: curAlbum,
        artwork: curArt
    });
}

function changeVideoOP() {
    if (curVid == 1) {
        curTitle = '青空のラプソディ';
		curAlbum = '青空のラプソディ';
		curArt = [{src: 'https://i.imgur.com/DExPG8h.jpg', sizes: '500x500', type: 'image/jpg'}, ];
		curArtist = 'fhána';
		document.title = "Aozora no Rhapsody | 青空のラプソディ";
        videojsPlayer.src("https://animethemes.moe/video/KobayashiSanChiNoMaidDragon-OP1-NCBD1080.webm");
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
        curTitle = 'イシュカン・コミュニケーション';
		curAlbum = 'イシュカン・コミュニケーション';
		curArt = [{src: 'https://i.imgur.com/laTkEnu.jpg', sizes: '500x497', type: 'image/jpg'}, ];
		curArtist = 'ちょろゴンず';
		document.title = "Ishukan Communication | イシュカン・コミュニケーション";
        videojsPlayer.src("https://animethemes.moe/video/KobayashiSanChiNoMaidDragon-ED1-NCBD1080.webm");
		document.getElementById("subactive").innerHTML = "";
		document.getElementById("subactive").innerHTML = "<option>Lyrics</option><option>None</option>";
		updateMetadata();
		curVid = 1;
		toggleSubtitles();
		videojsPlayer.play();
    }
}
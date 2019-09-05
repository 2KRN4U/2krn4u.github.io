// JavaScript Document
var track = 'opening_kar.ass';
var curTitle = '†吸tie Ladies†';
var videojsPlayer;
var curVid = 0;

function setup() {
    videojs('video').ready(function() {
        // This would look more nice as a plugin but is's just as showcase of using with custom players
        var video = this.tech_.el_;
        window.SubtitlesOctopusOnLoad = function() {
            var options = {
                video: video,
                subUrl: track,
                fonts: ['OpenSans.ttf', 'KGFirstTimeInForever-Regular.ttf', 'NotoSansJP-Bold.otf', 'second breakfast.ttf'],
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


//['opening_cred.ass', 'opening_kar.ass', 'opening_kar_jp.ass', 'opening_kar+cred.ass']
function toggleSubtitles() {
    if (document.getElementById("subactive").value === "None") {
        octopusInstance.freeTrack();

    } else if (curVid == 0) {
        if (document.getElementById("subactive").value === "Lyrics") {
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
    } else if (curVid == 1) {
        if (document.getElementById("subactive").value === "Lyrics") {
            track = 'ending.ass';
            octopusInstance.setTrackByUrl(track);

        } else if (document.getElementById("subactive").value === "kashi") {
            track = 'ending - jp.ass';
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
        artist: 'ソフィー・トワイライト(CV:富田美憂)、天野灯(CV:篠原侑)、夏木ひなた(CV:Lynn)、エリー(CV:和氣あず未)',
        album: '†吸tie Ladies† / HAPPY!!ストレンジフレンズ',
        artwork: [{
            src: 'https://i.imgur.com/EdJz8NO.jpg',
            sizes: '500x499',
            type: 'image/jpg'
        }, ]
    });
}

function changeVideoOP() {
    if (curVid == 1) {
        curTitle = '†吸tie Ladies†';
		document.title = "†Kyuutie Ladies† | †吸tie Ladies†";
        videojsPlayer.src("https://animethemes.moe/video/TonariNoKyuuketsukiSan-OP1-NCBD1080.webm");
		document.getElementById("subactive").innerHTML = "";
		document.getElementById("subactive").innerHTML = "<option>Lyrics</option><option>Credits</option><option>Lyrics | Credits</option><option value=\"kashi\">歌詞</option><option>None</option>";
		updateMetadata();
		curVid = 0;
		toggleSubtitles();
		videojsPlayer.play();
    }
}

function changeVideoED() {
    if (curVid == 0) {
        curTitle = 'HAPPY!!ストレンジフレンズ';
		document.title = "Happy!! Strange Friends | HAPPY!!ストレンジフレンズ";
        videojsPlayer.src("https://animethemes.moe/video/TonariNoKyuuketsukiSan-ED1-NCBD1080.webm");
		document.getElementById("subactive").innerHTML = "";
		document.getElementById("subactive").innerHTML = "<option>Lyrics</option><option value=\"kashi\">歌詞</option><option>None</option>";
		updateMetadata();
		curVid = 1;
		toggleSubtitles();
		videojsPlayer.play();
    }
}
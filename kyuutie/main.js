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
	
};
//['opening_cred.ass', 'opening_kar.ass', 'opening_kar_jp.ass', 'opening_kar+cred.ass']
function toggleSubtitles() {
	if (document.getElementById("subactive").value === "None") {
		if (subOn) {
            octopusInstance.dispose();
        }
        subOn = false;
	} else if (document.getElementById("subactive").value === "Lyrics") {
        if (subOn) {
            octopusInstance.dispose();
        }
		track = 'opening_kar.ass';
		setup();
		window.octopusInstance.setTrackByUrl(track);
		subOn = true;
	} else if (document.getElementById("subactive").value === "Credits") {
        if (subOn) {
            octopusInstance.dispose();
        }
		track = 'opening_cred.ass';
		setup();
		window.octopusInstance.setTrackByUrl(track);
		subOn = true;
	} else if (document.getElementById("subactive").value === "Lyrics | Credits") {
        if (subOn) {
            octopusInstance.dispose();
        }
		track = 'opening_kar+cred.ass';
		setup();
		window.octopusInstance.setTrackByUrl(track);
		subOn = true;
	} else if (document.getElementById("subactive").value === "kashi") {
        if (subOn) {
            octopusInstance.dispose();
        }
		track = 'opening_kar_jp.ass';
		setup();
		window.octopusInstance.setTrackByUrl(track);
		subOn = true;
	}
}
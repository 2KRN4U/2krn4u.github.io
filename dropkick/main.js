// JavaScript Document
var subOn = true;

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
	
};

function toggleSubtitles() {
	if (subOn) {
		window.octopusInstance.freeTrack();
		subOn = false;
	} else {
		window.octopusInstance.setTrackByUrl('opening.ass');
		subOn = true;
	}
}
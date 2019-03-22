const video = document.getElementsByTagName('video')[0];
video.addEventListener('loadedmetadata', () => {
	console.log(video.duration);
});
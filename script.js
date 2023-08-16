function startVideo() {
    navigatorAny = navigator;
    navigator.getUserMedia = navigator.getUserMedia ||
        navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
        navigatorAny.msGetUserMedia;
    delete navigatorAny;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: {
                facingMode: 'user',
                frameRate: { ideal: 10, max: 10 },
                width: { ideal: 320, max: 320 },
                height: { ideal: 240, max: 240 }
            }
        },
            stream => video.srcObject = stream,
            err => console.error(err)
        )
    }
}
startVideo()
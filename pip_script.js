// Javascript backend code for pip_window.html

document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const videoSource = document.getElementById('videoSource');
    const pipMessage = document.getElementById('pipMessage'); 

    // Pip: Picture in picture for video display
    function changeVideoAndEnterPiP(videoUrl) {
        videoSource.src = videoUrl;
        videoElement.load();
        videoElement.play().then(() => {
            if (videoElement !== document.pictureInPictureElement) {
                videoElement.requestPictureInPicture().then(() => {
                    // Unmute video if entering pip and muted
                    videoElement.muted = false;
                    pipMessage.style.display = 'block'; 
                }).catch(error => {
                    console.error('Error attempting to enable Picture-in-Picture mode:', error);
                });
            } else {
                // Video is already in PiP, just unmute it
                videoElement.muted = false;
            }
        }).catch(error => {
            console.error('Error playing the video:', error);
        });
    }

    // Leave pip
    document.addEventListener('leavepictureinpicture', () => {
        pipMessage.style.display = 'none'; 
    });



    // Visual Videos
        document.getElementById('VV1').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (1).mp4');
        });

        document.getElementById('VV2').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (2).mp4');
        });
        document.getElementById('VV3').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (3).mp4');
        });
        document.getElementById('VV4').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (4).mp4');
        });
        document.getElementById('VV5').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (5).mp4');
        });

        document.getElementById('VV7').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (7).mp4');
        });

        document.getElementById('VV9').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/VisualVideo (9).mp4');
        });

    // Audio Videos
        document.getElementById('AV1').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (1).mp4');
        });

        document.getElementById('AV2').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (2).mp4');
        });

        document.getElementById('AV3').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (3).mp4');
        });

        document.getElementById('AV4').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (4).mp4');
        });


        document.getElementById('AV5').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (5).mp4');
        });


        document.getElementById('AV6').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (6).mp4');
        });


        document.getElementById('AV7').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/AudioVideo (7).mp4');
        });


        

});
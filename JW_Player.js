class JW_Player {
    constructor(divId, width, height){
        this.width=width;
        this.height=height;
        this.container = document.getElementById(divId);
        this.video=null;
        this.autoplay=false;
    }

    load = (url) =>{
        let video = document.createElement("video");
        video.width=this.width;
        video.height=this.height;
        video.src=url;
        video.type="video/mp4";  
        this.container.append(video);
        this.video=video;
        if(this.autoplay){
            if(this.video.muted){
                this.video.muted = false;
            } else {
                debugger;
                this.video.muted = true;
                this.play()
            }
        }
    }

    getHeight = () => {
        return this.height;
    }

    getWidth = () => {
        return this.width;
    }

    play = () => {
        this.video.play();
    }

    pause = () =>{
        this.video.pause();
    }

    setAutoplay = (autoplay)=>{
        this.autoplay=autoplay;
    }

    addButtons = () => {
        let playButton = document.createElement("div");
        playButton.classList.add("material-icons");
        playButton.id="play-button";
        playButton.innerHTML="play_arrow";  
        this.container.append(playButton);
        playButton.onmousedown=this.play;

        let pauseButton = document.createElement("div");
        pauseButton.classList.add("material-icons");
        pauseButton.id="pause-button";
        pauseButton.innerHTML="pause";
        this.container.append(pauseButton);
        pauseButton.onmousedown=this.pause;
    }
}
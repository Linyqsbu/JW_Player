class JW_Player {
    constructor(divId, width, height){
        this.width=width;
        this.height=height;
        this.container = document.getElementById(divId);
    }

    load = (url) =>{
        let video = document.createElement("video");
        video.style.width=this.width;
        video.style.height=this.height;
        addSourceToVideo(video, url);
        this.container.append(video);
    }

    getHeight = () => {
        return this.height;
    }

    getWidth = () => {
        return this.width;
    }
}
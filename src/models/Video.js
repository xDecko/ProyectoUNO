class Vid extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("video");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Video.php");
    }

    static select(){
        let tag = document.createElement("video");
        tag.controls = true;
        super.select("Video.php",tag,"video");
    }
    static delete(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.delete("Video.php",tag,"iframe");
    }
    
    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = `${result}`;
                resolve();
            });
          });
    }
}
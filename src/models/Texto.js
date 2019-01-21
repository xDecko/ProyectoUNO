class Texto extends MultimediaElement{
    constructor(file,type = null){
        let element = document.createElement("iframe");
        element.controls = true;
        super(file,type,element);
    }

    save(){
        super.save("Texto.php");
    }

    loadFileContent(){
        return new Promise((resolve, reject) => {
            this._readFileAsDataURL((result)=>{
                this.DOMElement.src = `${result}`;
                this.DOMElement.onload = () => {
                }
                resolve();
            });
          });
    }

    static select(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.select("Texto.php",tag,"iframe");
    }
    static delete(){
        let tag = document.createElement("iframe");
        tag.controls = true;
        super.delete("Texto.php",tag,"iframe");
    }
}
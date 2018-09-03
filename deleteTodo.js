class DeleteTodo {
    constructor(){
        this.supprim = document.createElement("button");
        this.supprim.innerHTML = "Suppr" ;
        this.supprim.addEventListener("click", () => {
            this.supprim.parentNode.remove();
            this.delete();
        });
    }
    delete(){
        
        console.log(this.list.getList());
        console.log(this.list.delete(0));
        return this;
    }

    insertList(liste) {
        this.list = liste
    }

    setIndex(index){
        this.index = index
    }


}

class Addtodo {
    constructor(id){
        this.button = document.querySelector(id);
        this.button.addEventListener("click", () => {
            this.add();
        });
    }
    add(){
        this.list.insert(this.input.get());
        //console.log(this.list.delete(2));
        console.log(this.list.getList());
        return this;
    }
    //injection dépendance
    setInput(input){
        this.input = input
    }

    insertList(liste) {
        this.list = liste
    }


}

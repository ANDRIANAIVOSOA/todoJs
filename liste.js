class Liste {
    constructor(id, balise){
        this.ul = document.querySelector(id);
        this.li = balise;
        this.listeTab = [];
        this.restore();
        this.index = [];
    }

    insert(content) {
        const listeJson = document.createElement(this.li);
        
        const span = document.createElement("span");
        span.innerHTML = content;

        const deleteButton = new DeleteTodo();
        deleteButton.insertList(this);
        
        listeJson.appendChild(span);
        listeJson.appendChild(deleteButton.supprim);

        // this.listeJson = "<"+ this.li + ">"+content+"<input id='suppr' value='Suppr' type='submit'>"+"</"+ this.li + ">" ;
        this.listeTab.push(content);
        deleteButton.setIndex(this.listeTab.length-1);
        //console.log("longeur listTab : "+(this.listeTab.length-1));
        this.save();
        this.ul.appendChild(listeJson);
    }

    getList(){
        return this.listeTab;
    }

    save(){
        localStorage.setItem('todos', JSON.stringify(this.listeTab));
    }

    restore() {
        const restore = localStorage.getItem('todos');
        if(restore){
            const tabRestore = JSON.parse(restore);
            tabRestore.forEach(element => {
                this.insert(element);
            });
        }
    }

    valider(){

    }

    delete(index){
        this.listeTab = this.listeTab.filter((x, i) => i !== index);
        //console.log("ttttttt"+this.listeTab)
    }
    
}
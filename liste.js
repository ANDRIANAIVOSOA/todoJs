class Liste {
    constructor(id){
        this.ul = document.querySelector(id);
        this.listeTab = [];
        this.restore();
    }

    insert(content) {
        const listeJson = document.createElement(this.li);
        
        const span = document.createElement("span");
        span.innerHTML = content;

        const deleteButton = new DeleteTodo();
        deleteButton.insertList(this);
        
        listeJson.appendChild(span);
        listeJson.appendChild(deleteButton.supprim);
        const id = Math.random();
        this.listeTab.push({
            content: content,
            id: id
        });
        deleteButton.setIndex(id);
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
                this.insert(element.content);
            });
        }
    }

    delete(index){
        this.listeTab = this.listeTab.filter(x => x.id !== index);
        this.save();
    }
    
}
class Todo{
    constructor(id){
        this.input = document.querySelector(id);
    }
    get() {
        return this.input.value
    }
}
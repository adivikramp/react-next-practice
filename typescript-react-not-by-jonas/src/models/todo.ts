class TodoClass {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.id = new Date().toISOString()
        this.text = todoText;
    }
}

export { TodoClass }
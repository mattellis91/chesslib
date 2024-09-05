class Chesslib {
    constructor(container) {
        this.container = container;
        this.board = null;
        console.log("new chess lib");
        console.log(this.container);

        this.container.classList.add("cl-parent");
        this.board = document.createElement("div");
        this.board.classList.add("cl-board");
        this.container.appendChild(this.board);
    }
}
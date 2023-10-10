var rhit = rhit || {};

rhit.PageController = class {
    constructor() {
        let group = document.querySelectorAll(".group")
        for (let item of group) {
            item.onmouseenter = (event) => {
                this.highlight(item);
            };
        }

        for (let item of group) {
            item.onmouseleave = (event) => {
                this.unhighlight(item);
            };
        }

        let topButtons = document.querySelectorAll(".topButton");
        for (let topButton of topButtons) {
            topButton.onclick = (event) => {
                window.scrollTo(0, 0);
            };
        }
    }

    highlight(item) {
        item.style.setProperty("border", "2px solid black");
        item.style.setProperty("background-color", "rgba(128, 0, 0, 0.1)");
    }

    unhighlight(item) {
        item.style.setProperty("border", "none");
        item.style.setProperty("background-color", "rgba(128, 0, 0, 0)");
    }
}

rhit.main = function () {
    console.log("Ready");
    new rhit.PageController();
};

rhit.main();
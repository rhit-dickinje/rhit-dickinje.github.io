var rhit = rhit || {};

rhit.variableName = "";

rhit.PageController = class {
    constructor() {
        let group = document.querySelectorAll(".group")
        for (let item of group) {
            item.onmouseenter = (event) => {
                this.increaseSize(item);
            };
        }

        for (let item of group) {
            item.onmouseleave = (event) => {
                this.decreaseSize(item);
            };
        }
    }

    increaseSize(item) {
        item.style.setProperty("border", "2px solid black");
        console.log("Item touched")
    }

    decreaseSize(item) {
        item.style.setProperty("border", "0px solid black");
        console.log("Item touched")
    }
}

rhit.main = function () {
    console.log("Ready");
    new rhit.PageController();
};

rhit.main();
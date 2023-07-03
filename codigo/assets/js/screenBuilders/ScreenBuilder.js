class ScreenBuilder {

    constructor() {
        
        if (this.constructor == ScreenBuilder) {
            throw new Error("Abstract class!");
        }
    }

    _destroyPage() {
        const headerElement = document.querySelector("header"),
              sectionElement = document.querySelector("section"),
              footerElement = document.querySelector("footer");
        
        headerElement.innerHTML = "";
        sectionElement.innerHTML = "";
        footerElement.innerHTML = "";
    }

    _returnSchema() {
        throw new Error("Schema must be implemented");
    }

    build() {
        throw new Error("Build must be implemented");
    }
}
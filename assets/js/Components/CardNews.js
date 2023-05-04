class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello, Humberto!</h1>"
    }
}

customElements.define('card-news', CardNews);

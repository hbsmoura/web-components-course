class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
       const componentRoot = document.createElement('div');
       componentRoot.classList = 'card';

       componentRoot.innerHTML = ` 
        <div class="card-left">
            <span>By ${(this.getAttribute('author') || 'Anonymous')}</span>
            <a href="${this.getAttribute('title-url') || '#'}">${this.getAttribute('title')}</a>
            <p>${this.getAttribute('content')}</p>
        </div>
        <div class="card-right">
            <img src="${this.getAttribute('img-src') || './assets/img/news.jpg'}" alt="${this.getAttribute('img-alt') || 'News image'}">
        </div>
       `;

       return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.innerHTML = `
.card {
    width: 80%;
    box-shadow: 10px 10px 25px 0 rgba(0, 0, 0, .7);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    width: 50%;
}

.card-right {
    width: 40%;
}

.card-left > span {
    font-weight: 400;
}

.card-left > a {
    margin-top: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card-left > p {
    color: grey;
}

.card-right > img {
    width: 100%;
    height: auto;
}

        `;

        return style;
    }
}

customElements.define('card-news', CardNews);

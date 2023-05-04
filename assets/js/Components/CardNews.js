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
       
       const cardLeft = document.createElement('div');
       cardLeft.classList = 'card-left';

       const author = document.createElement('span');
       author.innerText = 'By ' + (this.getAttribute('author') || 'Anonymous');

       const title = document.createElement('a');
       title.innerText = this.getAttribute('title');
       title.href = this.getAttribute('title-url') || '#';

       const content = document.createElement('p');
       content.innerText = this.getAttribute('content');
       
       const cardRight = document.createElement('div');
       cardRight.classList = 'card-right';

       const img = document.createElement('img');
       img.src = this.getAttribute('img-src') || './assets/img/news.jpg';
       img.alt = this.getAttribute('img-alt') || 'News image';
       
       cardLeft.append(author, title, content);
       cardRight.appendChild(img);
       
       componentRoot.appendChild(cardLeft);       
       componentRoot.appendChild(cardRight);

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

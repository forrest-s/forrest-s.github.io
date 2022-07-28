class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <span>logo</span>
                    <a href="/">Home</a>
                    <a href="/about.html">About</a>
                    <a href="/contact.html">Contact</a>
                    <a href="/projects.html">Projects</a>
                    <a href="/knowledge.html">Knowledge</a>
                    <details role="list">
                        <summary aria-haspopup="listbox" >Links</summary>
                        <ul role="listbox">
                            <li><a href=''>github</a></li>
                            <li><a href=''>linkedin</a></li>
                        </ul>
                    </details>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header);

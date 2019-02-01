export class Nova {
    validateScore() {
        if (this.score === '1' ||
            this.score === '2' ||
            this.score === '3' ||
            this.score === '4') {
            this.getScoreCSSClass();
        }
        else {
            this.score = '1';
        }
    }
    isValidScore(score) {
        return score === '1' || score === '2' || score === '3' || score === '4';
    }
    componentWillLoad() {
        if (!this.isValidScore(this.score)) {
            this.score = '1';
        }
    }
    getScoreCSSClass() {
        let scoreClass = '';
        switch (this.score) {
            case '1':
                scoreClass = 'one';
                break;
            case '2':
                scoreClass = 'two';
                break;
            case '3':
                scoreClass = 'three';
                break;
            case '4':
                scoreClass = 'four';
                break;
            default:
                scoreClass = 'one';
                break;
        }
        return scoreClass;
    }
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "title" }, "NOVA"),
            h("div", { class: 'score ' + this.getScoreCSSClass() }, this.score)));
    }
    static get is() { return "nova-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "score": {
            "type": String,
            "attr": "score",
            "mutable": true,
            "watchCallbacks": ["validateScore"]
        }
    }; }
    static get style() { return "/**style-placeholder:nova-badge:**/"; }
}

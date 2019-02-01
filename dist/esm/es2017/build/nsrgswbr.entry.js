import { h } from '../nova.core.js';

class Nova {
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
    static get style() { return ":host{display:inline-block;font-family:Arial,Helvetica,sans-serif;font-weight:700}:host .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center}:host .container .title{color:#7e7e7e;font-size:24px}:host .container .score{color:#fff;width:68px;height:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:80px}:host .container .score.one{background-color:#48ab00}:host .container .score.two{background-color:#f5cd00}:host .container .score.three{background-color:#ec6500}:host .container .score.four{background-color:#e90000}"; }
}

export { Nova as NovaBadge };

import '../../stencil.core';
export declare class Nova {
    /**
     * The score
     */
    score: string;
    validateScore(): void;
    isValidScore(score: any): boolean;
    componentWillLoad(): void;
    /**
     * Transform score to CSS class
     */
    private getScoreCSSClass;
    render(): JSX.Element;
}

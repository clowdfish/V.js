/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/lodash/lodash.d.ts" />
declare module V {
    interface IVConfig {
        sideEffects?: boolean;
        affectsParent?: string;
        rulesSelector?: string;
        rulesDivider?: string;
    }
    function validate($element: JQuery, opts: IVConfig): boolean;
}
interface JQuery {
    validate(): boolean;
}

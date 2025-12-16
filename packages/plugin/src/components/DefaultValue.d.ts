import type { JSONOutput } from 'typedoc';
export interface DefaultValueProps {
    comment?: JSONOutput.Comment;
    type?: {
        type: string;
    };
    value?: JSONOutput.SomeType | string;
}
export declare function DefaultValue({ comment, value, type }: DefaultValueProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=DefaultValue.d.ts.map
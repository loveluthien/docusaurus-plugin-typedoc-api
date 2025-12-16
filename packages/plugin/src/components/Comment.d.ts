import type { JSONOutput } from 'typedoc';
export interface CommentProps {
    comment?: JSONOutput.Comment;
    root?: boolean;
    hideTags?: string[];
}
export declare function hasComment(comment?: JSONOutput.Comment): boolean;
export declare function displayPartsToMarkdown(parts: JSONOutput.CommentDisplayPart[]): string;
export declare function Comment({ comment, root, hideTags }: CommentProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Comment.d.ts.map
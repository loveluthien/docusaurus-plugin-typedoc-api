import { JSONOutput } from 'typedoc';
export type CommentWithModifiers = Pick<JSONOutput.Comment, 'blockTags' | 'summary'> & Required<Pick<JSONOutput.Comment, 'modifierTags'>>;
export declare function isCommentWithModifiers(comment?: JSONOutput.Comment): comment is CommentWithModifiers;
interface CommentBadgesProps {
    comment: CommentWithModifiers;
}
export declare function CommentBadges({ comment }: CommentBadgesProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommentBadges.d.ts.map
import type { TSDDeclarationReflection, TSDSignatureReflection } from '../types';
export declare function hasSources(reflection: TSDDeclarationReflection | TSDSignatureReflection): boolean;
export interface MemberSourcesProps {
    reflection: TSDDeclarationReflection | TSDSignatureReflection;
}
export declare function MemberSources({ reflection }: MemberSourcesProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=MemberSources.d.ts.map
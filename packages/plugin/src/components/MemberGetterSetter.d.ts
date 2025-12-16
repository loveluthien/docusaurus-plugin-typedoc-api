import type { TSDDeclarationReflection } from '../types';
export interface MemberGetterSetterProps {
    inPanel?: boolean;
    getter?: TSDDeclarationReflection['getSignature'];
    setter?: TSDDeclarationReflection['setSignature'];
}
export declare function MemberGetterSetter({ inPanel, getter, setter }: MemberGetterSetterProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=MemberGetterSetter.d.ts.map
import type { JSONOutput } from 'typedoc';
import type { TSDSignatureReflection } from '../types';
export declare function hasSigBody(sig: TSDSignatureReflection | undefined, minimal: boolean, hideSources?: boolean): boolean | JSONOutput.ArrayType | JSONOutput.ConditionalType | JSONOutput.IndexedAccessType | JSONOutput.InferredType | JSONOutput.IntersectionType | JSONOutput.IntrinsicType | JSONOutput.LiteralType | JSONOutput.MappedType | JSONOutput.OptionalType | JSONOutput.PredicateType | JSONOutput.QueryType | JSONOutput.ReferenceType | JSONOutput.ReflectionType | JSONOutput.RestType | JSONOutput.TemplateLiteralType | JSONOutput.TupleType | JSONOutput.NamedTupleMemberType | JSONOutput.TypeOperatorType | JSONOutput.UnionType | JSONOutput.UnknownType | undefined;
export interface MemberSignatureBodyProps {
    hideSources?: boolean;
    sig: TSDSignatureReflection;
}
export declare function MemberSignatureBody({ hideSources, sig }: MemberSignatureBodyProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MemberSignatureBody.d.ts.map
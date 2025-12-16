import type { JSONOutput } from 'typedoc';
import type { TSDDeclarationReflection } from '../types';
export declare function extractDeclarationFromType(type?: JSONOutput.Reflection | JSONOutput.SomeType): TSDDeclarationReflection | undefined;
export interface TypeProps {
    needsParens?: boolean;
    type?: {
        type: string;
        value?: unknown;
    };
}
export declare function Type({ needsParens, type: base }: TypeProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Type.d.ts.map
import { JSONOutput } from 'typedoc';
import type { ResolvedPackageConfig } from '../types';
export declare function joinUrl(...paths: string[]): string;
export declare function getKindSlug(decl: JSONOutput.DeclarationReflection): string;
export declare function getPackageSlug(pkgConfig: ResolvedPackageConfig, importPath: string, isSinglePackage: boolean): string;
//# sourceMappingURL=url.d.ts.map
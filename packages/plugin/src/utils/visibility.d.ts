import type { JSONOutput } from 'typedoc';
import type { TSDDeclarationReflectionMap } from '../types';
export declare function hasOwnDocument(id: number, reflections: TSDDeclarationReflectionMap): boolean;
export declare function allCategoryChildrenHaveOwnDocument(category: JSONOutput.ReflectionCategory, reflections: TSDDeclarationReflectionMap): boolean;
export declare function allGroupChildrenHaveOwnDocument(group: JSONOutput.ReflectionGroup, reflections: TSDDeclarationReflectionMap): boolean;
//# sourceMappingURL=visibility.d.ts.map
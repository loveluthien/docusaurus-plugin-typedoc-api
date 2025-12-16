import type { JSONOutput } from 'typedoc';
export interface HierarchyNode {
    types: JSONOutput.SomeType[];
    next?: HierarchyNode;
    isTarget?: boolean;
}
export declare function createHierarchy(reflection: JSONOutput.Reflection): HierarchyNode;
//# sourceMappingURL=hierarchy.d.ts.map
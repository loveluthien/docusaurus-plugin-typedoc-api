import { JSONOutput } from 'typedoc';
import type { DocusaurusPluginTypeDocApiOptions, PackageReflectionGroup, SidebarItem, TSDDeclarationReflection, TSDDeclarationReflectionMap } from '../types';
export declare function groupSidebarItems(map: TSDDeclarationReflectionMap, groups: JSONOutput.ReflectionGroup[]): SidebarItem[];
export declare function extractReflectionSidebar(pkg: TSDDeclarationReflection): SidebarItem[];
export declare function extractSidebar(packages: PackageReflectionGroup[], scopes: string[], changelogs: boolean, sortSidebar: NonNullable<DocusaurusPluginTypeDocApiOptions['sortSidebar']>): SidebarItem[];
//# sourceMappingURL=sidebar.d.ts.map
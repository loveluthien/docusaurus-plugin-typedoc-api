import { type JSONOutput } from 'typedoc';
import type { DocusaurusPluginTypeDocApiOptions, PackageReflectionGroup, ResolvedPackageConfig, TSDDeclarationReflection, TSDDeclarationReflectionMap } from '../types';
export declare function generateJson(projectRoot: string, entryPoints: string[], outFile: string, options: DocusaurusPluginTypeDocApiOptions): Promise<boolean>;
export declare function createReflectionMap(items?: TSDDeclarationReflection[]): TSDDeclarationReflectionMap;
export declare function loadPackageJsonAndDocs(initialDir: string, pkgFileName?: string, readmeFileName?: string, changelogFileName?: string): {
    packageJson: {
        name: string;
        version: string;
    };
    readmePath: string;
    changelogPath: string;
};
export declare function addMetadataToReflections(project: JSONOutput.DeclarationReflection, packageSlug: string, urlPrefix: string): TSDDeclarationReflection;
export declare function flattenAndGroupPackages(packageConfigs: ResolvedPackageConfig[], project: JSONOutput.ProjectReflection, urlPrefix: string, options: DocusaurusPluginTypeDocApiOptions, versioned?: boolean): PackageReflectionGroup[];
export declare function formatPackagesWithoutHostInfo(packages: PackageReflectionGroup[]): {
    entryPoints: import("../types").PackageReflectionGroupEntry[];
    packageName: string;
    packageVersion: string;
}[];
//# sourceMappingURL=data.d.ts.map
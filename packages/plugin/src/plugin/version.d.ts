import type { LoadContext } from '@docusaurus/types';
import type { DocusaurusPluginTypeDocApiOptions, VersionMetadata } from '../types';
export declare function getVersionedDocsDirPath(siteDir: string, pluginId: string): string;
export declare function readVersionsMetadata(context: LoadContext, options: DocusaurusPluginTypeDocApiOptions): Promise<VersionMetadata[]>;
//# sourceMappingURL=version.d.ts.map
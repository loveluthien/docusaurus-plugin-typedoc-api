import '@vscode/codicons/dist/codicon.css';
import './styles.css';
import { type Props as DocRootProps } from '@theme/DocRoot';
import type { ApiOptions, PackageReflectionGroup } from '../types';
export interface ApiPageProps extends DocRootProps {
    options: ApiOptions;
    packages: PackageReflectionGroup[];
}
declare function ApiPage({ options, packages, ...props }: ApiPageProps): import("react/jsx-runtime").JSX.Element;
export default ApiPage;
//# sourceMappingURL=ApiPage.d.ts.map
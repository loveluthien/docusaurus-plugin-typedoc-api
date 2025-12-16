import type { Props as DocItemProps } from '@theme/DocItem';
import type { ApiOptions, PackageReflectionGroup } from '../types';
export interface ApiIndexProps extends Pick<DocItemProps, 'route'> {
    history: {
        location: {
            pathname: string;
        };
        replace: (path: string) => void;
    };
    options: ApiOptions;
    packages: PackageReflectionGroup[];
}
export default function ApiIndex({ options, packages, history }: ApiIndexProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ApiIndex.d.ts.map
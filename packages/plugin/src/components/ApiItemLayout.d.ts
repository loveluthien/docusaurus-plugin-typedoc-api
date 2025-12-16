import type { PropNavigation } from '@docusaurus/plugin-content-docs';
import type { Props as DocItemProps } from '@theme/DocItem';
import type { TOCItem } from '../types';
export interface ApiItemLayoutProps extends Pick<DocItemProps, 'route'> {
    children: React.ReactNode;
    heading: React.ReactNode;
    toc: readonly TOCItem[];
    pageMetadata?: React.ReactNode;
    pagingMetadata?: PropNavigation;
}
export default function ApiItemLayout({ children, heading, pageMetadata, pagingMetadata, toc, }: ApiItemLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ApiItemLayout.d.ts.map
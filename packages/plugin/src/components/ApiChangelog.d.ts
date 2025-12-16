import type { Props as DocItemProps } from '@theme/DocItem';
export interface ApiChangelogProps extends Pick<DocItemProps, 'route'> {
    changelog: DocItemProps['content'];
}
export default function ApiChangelog({ changelog: Changelog, route }: ApiChangelogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ApiChangelog.d.ts.map
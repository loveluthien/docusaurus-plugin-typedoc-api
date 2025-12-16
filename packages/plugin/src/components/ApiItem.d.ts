import type { Props as DocItemProps } from '@theme/DocItem';
export interface ApiItemProps extends Pick<DocItemProps, 'route'> {
    readme?: React.ComponentType;
}
export declare const ApiOptionsContext: import("react").Context<{
    hideInherited: boolean;
    setHideInherited: (hideInherited: boolean) => void;
}>;
export default function ApiItem({ readme: Readme, route }: ApiItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ApiItem.d.ts.map
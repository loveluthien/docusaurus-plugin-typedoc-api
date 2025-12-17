// Type declarations for Docusaurus theme modules
declare module '@theme/Heading' {
	import type { ComponentType, HTMLAttributes } from 'react';

	export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}

	const Heading: ComponentType<HeadingProps>;
	export default Heading;
}

declare module '@theme/CodeBlock' {
	import type { ComponentType, ReactNode } from 'react';

	export interface CodeBlockProps {
		children: ReactNode;
		className?: string;
		language?: string;
		title?: string;
		showLineNumbers?: boolean;
	}

	const CodeBlock: ComponentType<CodeBlockProps>;
	export default CodeBlock;
}

declare module '@theme/MDXComponents' {
	import type { ComponentType, ReactNode } from 'react';
	import type { MDXComponents as MDXComponentsType } from '@mdx-js/react';

	const MDXComponents: MDXComponentsType;
	export default MDXComponents;
}

declare module '@theme/DocPaginator' {
	import type { ComponentType } from 'react';
	import type { PropNavigationLink } from '@docusaurus/plugin-content-docs';

	export interface DocPaginatorProps {
		previous?: PropNavigationLink;
		next?: PropNavigationLink;
	}

	const DocPaginator: ComponentType<DocPaginatorProps>;
	export default DocPaginator;
}

declare module '@theme/DocVersionBadge' {
	import type { ComponentType } from 'react';

	export interface DocVersionBadgeProps {
		className?: string;
	}

	const DocVersionBadge: ComponentType<DocVersionBadgeProps>;
	export default DocVersionBadge;
}

declare module '@theme/MDXContent' {
	import type { ComponentType, ReactNode } from 'react';

	export interface MDXContentProps {
		children: ReactNode;
	}

	const MDXContent: ComponentType<MDXContentProps>;
	export default MDXContent;
}

declare module '@theme/TOC' {
	import type { ComponentType } from 'react';
	import type { TOCItem } from '@docusaurus/mdx-loader';

	export interface TOCProps {
		toc: readonly TOCItem[];
		minHeadingLevel?: number;
		maxHeadingLevel?: number;
		className?: string;
	}

	const TOC: ComponentType<TOCProps>;
	export default TOC;
}

declare module '@theme/TOCCollapsible' {
	import type { ComponentType } from 'react';
	import type { TOCItem } from '@docusaurus/mdx-loader';

	export interface TOCCollapsibleProps {
		toc: readonly TOCItem[];
		minHeadingLevel?: number;
		maxHeadingLevel?: number;
		className?: string;
	}

	const TOCCollapsible: ComponentType<TOCCollapsibleProps>;
	export default TOCCollapsible;
}

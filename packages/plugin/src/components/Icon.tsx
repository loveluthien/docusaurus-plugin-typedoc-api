import type { TSDDeclarationReflection, TSDSignatureReflection } from '../types';
import { getKindIcon, getKindIconColor } from '../utils/icons';

export interface IconProps {
	reflection: TSDDeclarationReflection | TSDSignatureReflection;
}

export function Icon({ reflection }: IconProps) {
	const icon = getKindIcon(reflection.kind, reflection.name);

	if (!icon) {
		return null;
	}

	const color = getKindIconColor(reflection.kind);

	return <i className={`codicon codicon-${icon}`} style={{ color }} />;
}

import type { ast } from '../../rollup/types';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';

export default class ImportNamespaceSpecifier extends NodeBase<ast.ImportNamespaceSpecifier> {
	local!: Identifier;
	type!: NodeType.tImportNamespaceSpecifier;

	protected applyDeoptimizations() {}
}

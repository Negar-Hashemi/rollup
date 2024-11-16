import type Identifier from './Identifier';
import type Literal from './Literal';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';

export default class ImportSpecifier extends NodeBase {
	imported!: Identifier | Literal<string>;
	local!: Identifier;
	type!: NodeType.tImportSpecifier;

	protected applyDeoptimizations() {}
}

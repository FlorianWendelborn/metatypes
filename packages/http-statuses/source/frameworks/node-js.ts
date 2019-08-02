import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Node.js
 */
export class NodeJsGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'NodeJsStatuses'
	public readonly key = 'nodeJs'
}

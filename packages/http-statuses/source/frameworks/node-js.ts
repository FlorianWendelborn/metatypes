import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class NodeJsGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly key = 'nodeJs'
	public readonly enumName = 'NodeJsStatuses'
}

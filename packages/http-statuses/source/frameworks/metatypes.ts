import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for @metatypes/http-statuses
 */
export class MetatypesGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'Statuses'
	public readonly key = 'metatypes'
}

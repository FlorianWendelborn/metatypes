import { URL } from 'url'

import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for @metatypes/http-statuses
 */
export class MetatypesGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'Statuses'
	public readonly frameworkName = '@metatypes/http-statuses'
	public readonly key = 'metatypes'
	public readonly referenceUrl = new URL(
		'https://github.com/FlorianWendelborn/metatypes/tree/master/packages/http-statuses'
	)
}

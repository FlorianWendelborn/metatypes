import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class SpringFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly key = 'springFramework'
	public readonly enumName = 'SpringStatuses'
}

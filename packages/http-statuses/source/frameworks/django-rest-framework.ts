import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class DjangoRestFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly key = 'djangoRestFramework'
	public readonly enumName = 'DRFStatuses'
}

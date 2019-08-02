import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class DjangoRestFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'DrfStatuses'
	public readonly key = 'djangoRestFramework'
}

import { statuses } from '../data'
import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class DjangoRestFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly key = 'djangoRestFramework'
}

const instance: DjangoRestFrameworkGenerator = new DjangoRestFrameworkGenerator(
	statuses
)
console.log(instance.generateTypeScriptEnums())

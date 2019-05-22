import { statuses } from '../data'
import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class SpringFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly key = 'springFramework'
}

const instance = new SpringFrameworkGenerator(statuses)
console.log(instance.generateTypeScriptEnums())

import { URL } from 'url'

import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class SpringFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'SpringStatuses'
	public readonly frameworkName = 'Spring Framework'
	public readonly key = 'springFramework'
	public readonly referenceUrl = new URL(
		'https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpStatus.html'
	)
}

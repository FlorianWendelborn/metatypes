import { URL } from 'url'

import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class DjangoRestFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'DrfStatuses'
	public readonly frameworkName = 'Django Rest Framework'
	public readonly key = 'djangoRestFramework'
	public readonly referenceUrl = new URL(
		'https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py'
	)
}

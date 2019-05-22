import { statuses } from '../data'
import { ICodeGenerator, IHttpStatusCodeDefinition } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Django-Rest-Framework
 */
export class DjangoRestFrameworkGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	/**
	 * Generate TypeScript Enums for DRF
	 */
	public generateTypeScriptEnum(): string {
		const entries: string[] = this.statusCodes
			.filter(
				(entry: IHttpStatusCodeDefinition) =>
					entry.frameworks.djangoRestFramework !== null
			)
			.map(
				(entry: IHttpStatusCodeDefinition) =>
					`${entry.frameworks.djangoRestFramework} = ${entry.statusCode}`
			)

		return `export const enum Statuses {\n\t${entries.join('\n\t')}\n}`
	}
}

const instance: DjangoRestFrameworkGenerator = new DjangoRestFrameworkGenerator(
	statuses
)
console.log(instance.generateTypeScriptEnum())

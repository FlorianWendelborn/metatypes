import { ICodeGenerator, IHttpStatus } from '../types'

const JSDOC_SEPARATOR = '\n\t * '

/**
 * A Base class for a code generator
 */
export class BaseCodeGenerator implements ICodeGenerator {
	public readonly key!: keyof IHttpStatus['frameworks']

	/**
	 * List of HTTP Status Codes
	 */
	public readonly statusCodes: IHttpStatus[]

	public constructor(statusCodes: IHttpStatus[]) {
		this.statusCodes = statusCodes
	}

	public generateTypeScriptEnums(): string {
		const entries: string[] = this.filteredStatuses.map((status: IHttpStatus) =>
			[this.createJSDoc(status), this.createEnum(status)].join('\n\t')
		)

		return `export const enum Statuses {\n\t${entries.join('\n\n\t')}\n}`
	}

	protected get filteredStatuses(): IHttpStatus[] {
		return this.statusCodes.filter((status) => this.getFramework(status))
	}

	protected createEnum(status: IHttpStatus): string {
		return `${this.getFramework(status)} = ${status.statusCode},`
	}

	protected createJSDoc(status: IHttpStatus): string {
		const values = {
			deprecated: status.deprecated
				? `@deprecated [${status.deprecated.reason}]{@link ${
						status.deprecated.link.href
				  }}`
				: null,
			linkToRFC: status.rfc ? `@see [RFC]{@link ${status.rfc.link}}` : null,
			officialName: status.rfc ? status.rfc.name : null,
		}

		const lines = [
			values.officialName,
			'',
			values.deprecated,
			values.linkToRFC,
		].filter((line) => line !== null)

		return `/**${JSDOC_SEPARATOR}${lines.join(JSDOC_SEPARATOR)}\n\t */`
	}

	protected getFramework(status: IHttpStatus): string | false {
		return status.frameworks[this.key]
	}
}

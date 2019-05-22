import { ICodeGenerator, IHttpStatus } from '../types'

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
		return this.statusCodes.filter(
			(status) => this.getFramework(status) !== null
		)
	}

	protected createEnum(status: IHttpStatus): string {
		return `${this.getFramework(status)} = ${status.statusCode},`
	}

	protected createJSDoc(status: IHttpStatus): string {
		const lines: string[] = [
			`${status.rfc.name}`,
			`@see [RFC]{@link ${status.rfc.link}}\n\t */`,
		]

		return `/**\n\t * ${lines.join('\n\t * ')}`
	}

	protected getFramework(status: IHttpStatus): string | null {
		return status.frameworks[this.key]
	}
}

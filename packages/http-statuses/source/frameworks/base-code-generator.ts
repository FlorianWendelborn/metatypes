import { URL } from 'url'

import { FrameworkSupportStatus, ICodeGenerator, IHttpStatus } from '../types'

const JSDOC_SEPARATOR = '\n\t * '

/**
 * A Base class for a code generator
 */
export abstract class BaseCodeGenerator implements ICodeGenerator {
	// Metadata
	public abstract readonly enumName: string
	public abstract readonly frameworkName: string
	public abstract readonly key: keyof IHttpStatus['frameworks']
	public abstract readonly referenceUrl: URL

	// Data
	public readonly statusCodes: IHttpStatus[]

	public constructor(statusCodes: IHttpStatus[]) {
		this.statusCodes = statusCodes
	}

	public generateTypeScriptEnums(): string {
		const entries: string[] = this.supportedStatuses.map(
			(status: IHttpStatus) =>
				[this.createJSDoc(status), this.createEnum(status)].join('\n\t')
		)

		return [
			'/**',
			` * HTTP Status Codes as defined by ${this.frameworkName}`,
			` * @see {@link ${this.referenceUrl.href}}`,
			' */',
			`export const enum ${this.enumName} {`,
			entries.map((entry) => `\t${entry}`).join('\n\n'),
			'}',
		].join('\n')
	}

	protected get supportedStatuses(): IHttpStatus[] {
		return this.statusCodes.filter(
			(status) =>
				this.getFramework(status).status === FrameworkSupportStatus.Supported
		)
	}

	protected createEnum(status: IHttpStatus): string {
		const framework = this.getFramework(status)

		if (!(framework.status === FrameworkSupportStatus.Supported))
			throw new Error('This Status is Unsupported')

		const enumKey = framework.name
			// 0-9 aren’t allowed at beginning of string
			.replace(/$[^a-zA-Z_]*/, '')
			// Only keep allowed characters
			.replace(/[^_a-zA-Z0-9]/g, '')

		return `${enumKey} = ${status.statusCode},`
	}

	protected createJSDoc(status: IHttpStatus): string {
		const values = {
			deprecated: status.deprecated
				? `@deprecated [${status.deprecated.reason}]{@link ${status.deprecated.link.href}}`
				: null,
			description: status.description
				? `@description ${status.description}`
				: null,
			linkToRFC: status.rfc ? `@see [RFC]{@link ${status.rfc.link}}` : null,
			officialName: status.rfc ? status.rfc.name : null,
			summary: `@summary ${status.summary}`,
		}

		const lines = [
			values.officialName,
			values.summary,
			values.description,
			'',
			values.deprecated,
			values.linkToRFC,
		].filter((line) => line !== null)

		return `/**${JSDOC_SEPARATOR}${lines.join(JSDOC_SEPARATOR)}\n\t */`
	}

	protected getFramework(status: IHttpStatus) {
		return status.frameworks[this.key]
	}
}

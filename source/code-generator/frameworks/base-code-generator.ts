import { IHttpStatusCodeDefinition } from '../types'

/**
 * A Base class for a code generator
 */
export class BaseCodeGenerator {
	/**
	 * List of HTTP Status Codes
	 */
	public readonly statusCodes: IHttpStatusCodeDefinition[]

	public constructor(statusCodes: IHttpStatusCodeDefinition[]) {
		this.statusCodes = statusCodes
	}
}

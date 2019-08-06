import { URL } from 'url'

export const enum FrameworkSupportStatus {
	PullRequest = 'pull-request',
	Rejected = 'rejected',
	Supported = 'supported',
	Unknown = 'unknown',
}

export type IFrameworkSupport =
	| {
			name: string
			status: FrameworkSupportStatus.Supported
	  }
	| { status: FrameworkSupportStatus.Unknown }
	| { link: URL; status: FrameworkSupportStatus.PullRequest }
	| { link: URL; reason: string; status: FrameworkSupportStatus.Rejected }

export interface IHttpStatus {
	/**
	 * Is this status deprecated? If yes, what’s the reason?
	 */
	deprecated:
		| false
		| {
				/**
				 * Source for the Deprecation
				 */
				link: URL
				/**
				 * Why was this deprecated?
				 */
				reason: string
		  }

	/**
	 * Precise, and Human-Readable Explanation
	 */
	description: string | null

	/**
	 * How is this named in various frameworks?
	 */
	frameworks: {
		/**
		 * How is this called in Django Rest Framework?
		 * @see {@link https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py}
		 */
		djangoRestFramework: IFrameworkSupport

		/**
		 * How is this called in @metatypes/http-statuses?
		 * @see {@link https://github.com/FlorianWendelborn/metatypes}
		 */
		metatypes: IFrameworkSupport

		/**
		 * How is this called in Node.js?
		 * @see {@link https://nodejs.org/api/http.html#http_http_status_codes}
		 */
		nodeJs: IFrameworkSupport

		/**
		 * How is this called in Spring Framework?
		 * @see {@link https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpStatus.html}
		 */
		springFramework: IFrameworkSupport
	}

	/**
	 * What does the RFC say about it?
	 */
	rfc:
		| false
		| {
				/**
				 * Link to most recent RFC
				 */
				link: URL

				/**
				 * How is this status called according to the RFC?
				 */
				name: string
		  }

	/**
	 * The Numeric HTTP Status Code
	 */
	statusCode: number

	/**
	 * Short, and Human-Readable Explanation
	 */
	summary: string
}

export interface ICodeGenerator {
	/**
	 * What should be the name of the generated enum?
	 */
	enumName: string

	/**
	 * What’s the Human-Readable Name of the Framework?
	 */
	frameworkName: string

	/**
	 * For which framework is this?
	 */
	key: keyof IHttpStatus['frameworks']

	/**
	 * Link to the framework’s http status code list
	 */
	referenceUrl: URL

	/**
	 * Generates Framework-specific TypeScript Enums
	 */
	generateTypeScriptEnums(): string
}

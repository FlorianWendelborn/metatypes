export interface IHttpStatusCodeDefinition {
	/**
	 * Deprecation reason, if any.
	 */
	deprecated?: string
	/**
	 * How is this named in various frameworks?
	 */
	frameworks: {
		/**
		 * How is this called in Django Rest Framework?
		 * @see {@link https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py}
		 */
		djangoRestFramework: string | null
	}
	/**
	 * What does the RFC say about it?
	 */
	rfc: {
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
}

export interface ICodeGenerator {
	/**
	 * Generates Framework-specific TypeScript Enums
	 */
	generateTypeScriptEnum(): string
}

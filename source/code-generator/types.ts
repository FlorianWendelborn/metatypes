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
	 * How is this named in various frameworks?
	 */
	frameworks: {
		/**
		 * How is this called in Django Rest Framework?
		 * @see {@link https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py}
		 */
		djangoRestFramework: string | false
		/**
		 * How is this called in Spring Framework?
		 * @see {@link https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpStatus.html}
		 */
		springFramework: string | false
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
}

export interface ICodeGenerator {
	/**
	 * For which framework is this?
	 */
	key: keyof IHttpStatus['frameworks']

	/**
	 * Generates Framework-specific TypeScript Enums
	 */
	generateTypeScriptEnums(): string
}

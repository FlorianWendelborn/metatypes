/**
 * HTTP Status Codes as defined by @metatypes/http-statuses
 * @see {@link https://github.com/FlorianWendelborn/metatypes/tree/master/packages/http-statuses}
 */
export const enum Statuses {
	/**
	 * Continue
	 * @summary Request received, please continue
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
	 */
	HTTP_100_CONTINUE = 100,

	/**
	 * Switching Protocols
	 * @summary Switching to new protocol; obey Upgrade header
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
	 */
	HTTP_101_SWITCHING_PROTOCOLS = 101,

	/**
	 * Processing
	 * @summary TODO: summarize
	 * 
	 * @deprecated [due to lack of implementation]{@link https://tools.ietf.org/html/rfc4918#appendix-F.3}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.1}
	 */
	HTTP_102_PROCESSING = 102,

	/**
	 * Early Hints
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc8297#section-2}
	 */
	HTTP_103_EARLY_HINTS = 103,

	/**
	 * OK
	 * @summary Request fulfilled, document follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}}
	 */
	HTTP_200_OK = 200,

	/**
	 * Created
	 * @summary Document created, URL follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
	 */
	HTTP_201_CREATED = 201,

	/**
	 * Accepted
	 * @summary Request accepted, processing continues off-line
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
	 */
	HTTP_202_ACCEPTED = 202,

	/**
	 * Non-Authoritative Information
	 * @summary Request fulfilled from cache
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
	 */
	HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203,

	/**
	 * No Content
	 * @summary Request fulfilled, nothing follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
	 */
	HTTP_204_NO_CONTENT = 204,

	/**
	 * Reset Content
	 * @summary Clear input form for further input
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
	 */
	HTTP_205_RESET_CONTENT = 205,

	/**
	 * Partial Content
	 * @summary Partial content follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.1}
	 */
	HTTP_206_PARTIAL_CONTENT = 206,

	/**
	 * Multi-Status
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.2}
	 */
	HTTP_207_MULTI_STATUS = 207,

	/**
	 * Already Reported
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.1}
	 */
	HTTP_208_ALREADY_REPORTED = 208,

	/**
	 * IM Used
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
	 */
	HTTP_226_IM_USED = 226,

	/**
	 * Multiple Choices
	 * @summary Object has several resources — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
	 */
	HTTP_300_MULTIPLE_CHOICES = 300,

	/**
	 * Moved Permanently
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
	 */
	HTTP_301_MOVED_PERMANENTLY = 301,

	/**
	 * Found
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
	 */
	HTTP_302_FOUND = 302,

	/**
	 * See Other
	 * @summary Object moved — see Method and URL list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
	 */
	HTTP_303_SEE_OTHER = 303,

	/**
	 * Not Modified
	 * @summary Document has not changed since given time
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.1}
	 */
	HTTP_304_NOT_MODIFIED = 304,

	/**
	 * Use Proxy
	 * @summary You must use proxy specified in Location to access this resource
	 * 
	 * @deprecated [due to security concerns regarding in-band configuration of a proxy]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	HTTP_305_USE_PROXY = 305,

	/**
	 * (Unused)
	 * @summary TODO: summarize
	 * 
	 * @deprecated [The 306 status code was defined in a previous version of this specification, is no longer used, and the code is reserved.]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	HTTP_306_RESERVED = 306,

	/**
	 * Temporary Redirect
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
	 */
	HTTP_307_TEMPORARY_REDIRECT = 307,

	/**
	 * Permanent Redirect
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7538#section-3}
	 */
	HTTP_308_PERMANENT_REDIRECT = 308,

	/**
	 * Bad Request
	 * @summary Bad request syntax or unsupported method
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
	 */
	HTTP_400_BAD_REQUEST = 400,

	/**
	 * Unauthorized
	 * @summary No permission — see authorization schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.1}
	 */
	HTTP_401_UNAUTHORIZED = 401,

	/**
	 * Payment Required
	 * @summary No payment — see charging schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
	 */
	HTTP_402_PAYMENT_REQUIRED = 402,

	/**
	 * Forbidden
	 * @summary Request forbidden — authorization will not help
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
	 */
	HTTP_403_FORBIDDEN = 403,

	/**
	 * Not Found
	 * @summary Nothing matches the given URI
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
	 */
	HTTP_404_NOT_FOUND = 404,

	/**
	 * Method Not Allowed
	 * @summary Specified method is invalid for this resource
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
	 */
	HTTP_405_METHOD_NOT_ALLOWED = 405,

	/**
	 * Not Acceptable
	 * @summary URI not available in preferred format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
	 */
	HTTP_406_NOT_ACCEPTABLE = 406,

	/**
	 * Proxy Authentication Required
	 * @summary You must authenticate with this proxy before proceeding
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.2}
	 */
	HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407,

	/**
	 * Request Timeout
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
	 */
	HTTP_408_REQUEST_TIMEOUT = 408,

	/**
	 * Conflict
	 * @summary Request conflict
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
	 */
	HTTP_409_CONFLICT = 409,

	/**
	 * Gone
	 * @summary URI no longer exists and has been permanently removed
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
	 */
	HTTP_410_GONE = 410,

	/**
	 * Length Required
	 * @summary Client must specify Content-Length
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
	 */
	HTTP_411_LENGTH_REQUIRED = 411,

	/**
	 * Precondition Failed
	 * @summary Precondition in headers is false
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.2}
	 */
	HTTP_412_PRECONDITION_FAILED = 412,

	/**
	 * Payload Too Large
	 * @summary Entity is too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
	 */
	HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413,

	/**
	 * URI Too Long
	 * @summary URI is too long
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
	 */
	HTTP_414_REQUEST_URI_TOO_LONG = 414,

	/**
	 * Unsupported Media Type
	 * @summary Entity body in unsupported format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
	 */
	HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415,

	/**
	 * Range Not Satisfiable
	 * @summary Cannot satisfy request range
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.4}
	 */
	HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416,

	/**
	 * Expectation Failed
	 * @summary Expect condition could not be satisfied
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
	 */
	HTTP_417_EXPECTATION_FAILED = 417,

	/**
	 * I'm a teapot
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
	 */
	HTTP_418_I_AM_A_TEAPOT = 418,

	/**
	 * Misdirected Request
	 * @summary Server is not able to produce a response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7540#section-9.1.2}
	 */
	HTTP_421_MISDIRECTED_REQUEST = 421,

	/**
	 * Unprocessable Entity
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.3}
	 */
	HTTP_422_UNPROCESSABLE_ENTITY = 422,

	/**
	 * Locked
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.4}
	 */
	HTTP_423_LOCKED = 423,

	/**
	 * Failed Dependency
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.5}
	 */
	HTTP_424_FAILED_DEPENDENCY = 424,

	/**
	 * Upgrade Required
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2817#section-6}
	 */
	HTTP_426_UPGRADE_REQUIRED = 426,

	/**
	 * Precondition Required
	 * @summary The origin server requires the request to be conditional
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-3}
	 */
	HTTP_428_PRECONDITION_REQUIRED = 428,

	/**
	 * Too Many Requests
	 * @summary The user has sent too many requests in a given amount of time ("rate limiting")
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-4}
	 */
	HTTP_429_TOO_MANY_REQUESTS = 429,

	/**
	 * Request Header Fields Too Large
	 * @summary The server is unwilling to process the request because its header fields are too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-5}
	 */
	HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

	/**
	 * Unavailable For Legal Reasons
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7725#section-3}
	 */
	HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS = 451,

	/**
	 * Internal Server Error
	 * @summary Server got itself in trouble
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
	 */
	HTTP_500_INTERNAL_SERVER_ERROR = 500,

	/**
	 * Not Implemented
	 * @summary Server does not support this operation
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
	 */
	HTTP_501_NOT_IMPLEMENTED = 501,

	/**
	 * Bad Gateway
	 * @summary Invalid responses from another server/proxy
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
	 */
	HTTP_502_BAD_GATEWAY = 502,

	/**
	 * Service Unavailable
	 * @summary The server cannot process the request due to a high load
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
	 */
	HTTP_503_SERVICE_UNAVAILABLE = 503,

	/**
	 * Gateway Timeout
	 * @summary The gateway server did not receive a timely response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
	 */
	HTTP_504_GATEWAY_TIMEOUT = 504,

	/**
	 * HTTP Version Not Supported
	 * @summary Cannot fulfill request
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
	 */
	HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505,

	/**
	 * Variant Also Negotiates
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2295#section-8.1}
	 */
	HTTP_506_VARIANT_ALSO_NEGOTIATES = 506,

	/**
	 * Insufficient Storage
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.6}
	 */
	HTTP_507_INSUFFICIENT_STORAGE = 507,

	/**
	 * Loop Detected
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.2}
	 */
	HTTP_508_LOOP_DETECTED = 508,

	/**
	 * @summary TODO: summarize
	 * 
	 */
	HTTP_509_BANDWIDTH_LIMIT_EXCEEDED = 509,

	/**
	 * Not Extended
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2774#section-7}
	 */
	HTTP_510_NOT_EXTENDED = 510,

	/**
	 * Network Authentication Required
	 * @summary The client needs to authenticate to gain network access
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-6}
	 */
	HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511,
}

/**
 * HTTP Status Codes as defined by Django Rest Framework
 * @see {@link https://github.com/encode/django-rest-framework/blob/master/rest_framework/status.py}
 */
export const enum DrfStatuses {
	/**
	 * Continue
	 * @summary Request received, please continue
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
	 */
	HTTP_100_CONTINUE = 100,

	/**
	 * Switching Protocols
	 * @summary Switching to new protocol; obey Upgrade header
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
	 */
	HTTP_101_SWITCHING_PROTOCOLS = 101,

	/**
	 * OK
	 * @summary Request fulfilled, document follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}}
	 */
	HTTP_200_OK = 200,

	/**
	 * Created
	 * @summary Document created, URL follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
	 */
	HTTP_201_CREATED = 201,

	/**
	 * Accepted
	 * @summary Request accepted, processing continues off-line
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
	 */
	HTTP_202_ACCEPTED = 202,

	/**
	 * Non-Authoritative Information
	 * @summary Request fulfilled from cache
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
	 */
	HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203,

	/**
	 * No Content
	 * @summary Request fulfilled, nothing follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
	 */
	HTTP_204_NO_CONTENT = 204,

	/**
	 * Reset Content
	 * @summary Clear input form for further input
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
	 */
	HTTP_205_RESET_CONTENT = 205,

	/**
	 * Partial Content
	 * @summary Partial content follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.1}
	 */
	HTTP_206_PARTIAL_CONTENT = 206,

	/**
	 * Multi-Status
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.2}
	 */
	HTTP_207_MULTI_STATUS = 207,

	/**
	 * Already Reported
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.1}
	 */
	HTTP_208_ALREADY_REPORTED = 208,

	/**
	 * IM Used
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
	 */
	HTTP_226_IM_USED = 226,

	/**
	 * Multiple Choices
	 * @summary Object has several resources — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
	 */
	HTTP_300_MULTIPLE_CHOICES = 300,

	/**
	 * Moved Permanently
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
	 */
	HTTP_301_MOVED_PERMANENTLY = 301,

	/**
	 * Found
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
	 */
	HTTP_302_FOUND = 302,

	/**
	 * See Other
	 * @summary Object moved — see Method and URL list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
	 */
	HTTP_303_SEE_OTHER = 303,

	/**
	 * Not Modified
	 * @summary Document has not changed since given time
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.1}
	 */
	HTTP_304_NOT_MODIFIED = 304,

	/**
	 * Use Proxy
	 * @summary You must use proxy specified in Location to access this resource
	 * 
	 * @deprecated [due to security concerns regarding in-band configuration of a proxy]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	HTTP_305_USE_PROXY = 305,

	/**
	 * (Unused)
	 * @summary TODO: summarize
	 * 
	 * @deprecated [The 306 status code was defined in a previous version of this specification, is no longer used, and the code is reserved.]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	HTTP_306_RESERVED = 306,

	/**
	 * Temporary Redirect
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
	 */
	HTTP_307_TEMPORARY_REDIRECT = 307,

	/**
	 * Permanent Redirect
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7538#section-3}
	 */
	HTTP_308_PERMANENT_REDIRECT = 308,

	/**
	 * Bad Request
	 * @summary Bad request syntax or unsupported method
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
	 */
	HTTP_400_BAD_REQUEST = 400,

	/**
	 * Unauthorized
	 * @summary No permission — see authorization schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.1}
	 */
	HTTP_401_UNAUTHORIZED = 401,

	/**
	 * Payment Required
	 * @summary No payment — see charging schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
	 */
	HTTP_402_PAYMENT_REQUIRED = 402,

	/**
	 * Forbidden
	 * @summary Request forbidden — authorization will not help
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
	 */
	HTTP_403_FORBIDDEN = 403,

	/**
	 * Not Found
	 * @summary Nothing matches the given URI
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
	 */
	HTTP_404_NOT_FOUND = 404,

	/**
	 * Method Not Allowed
	 * @summary Specified method is invalid for this resource
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
	 */
	HTTP_405_METHOD_NOT_ALLOWED = 405,

	/**
	 * Not Acceptable
	 * @summary URI not available in preferred format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
	 */
	HTTP_406_NOT_ACCEPTABLE = 406,

	/**
	 * Proxy Authentication Required
	 * @summary You must authenticate with this proxy before proceeding
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.2}
	 */
	HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407,

	/**
	 * Request Timeout
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
	 */
	HTTP_408_REQUEST_TIMEOUT = 408,

	/**
	 * Conflict
	 * @summary Request conflict
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
	 */
	HTTP_409_CONFLICT = 409,

	/**
	 * Gone
	 * @summary URI no longer exists and has been permanently removed
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
	 */
	HTTP_410_GONE = 410,

	/**
	 * Length Required
	 * @summary Client must specify Content-Length
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
	 */
	HTTP_411_LENGTH_REQUIRED = 411,

	/**
	 * Precondition Failed
	 * @summary Precondition in headers is false
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.2}
	 */
	HTTP_412_PRECONDITION_FAILED = 412,

	/**
	 * Payload Too Large
	 * @summary Entity is too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
	 */
	HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413,

	/**
	 * URI Too Long
	 * @summary URI is too long
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
	 */
	HTTP_414_REQUEST_URI_TOO_LONG = 414,

	/**
	 * Unsupported Media Type
	 * @summary Entity body in unsupported format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
	 */
	HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415,

	/**
	 * Range Not Satisfiable
	 * @summary Cannot satisfy request range
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.4}
	 */
	HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416,

	/**
	 * Expectation Failed
	 * @summary Expect condition could not be satisfied
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
	 */
	HTTP_417_EXPECTATION_FAILED = 417,

	/**
	 * Unprocessable Entity
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.3}
	 */
	HTTP_422_UNPROCESSABLE_ENTITY = 422,

	/**
	 * Locked
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.4}
	 */
	HTTP_423_LOCKED = 423,

	/**
	 * Failed Dependency
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.5}
	 */
	HTTP_424_FAILED_DEPENDENCY = 424,

	/**
	 * Upgrade Required
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2817#section-6}
	 */
	HTTP_426_UPGRADE_REQUIRED = 426,

	/**
	 * Precondition Required
	 * @summary The origin server requires the request to be conditional
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-3}
	 */
	HTTP_428_PRECONDITION_REQUIRED = 428,

	/**
	 * Too Many Requests
	 * @summary The user has sent too many requests in a given amount of time ("rate limiting")
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-4}
	 */
	HTTP_429_TOO_MANY_REQUESTS = 429,

	/**
	 * Request Header Fields Too Large
	 * @summary The server is unwilling to process the request because its header fields are too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-5}
	 */
	HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

	/**
	 * Unavailable For Legal Reasons
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7725#section-3}
	 */
	HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS = 451,

	/**
	 * Internal Server Error
	 * @summary Server got itself in trouble
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
	 */
	HTTP_500_INTERNAL_SERVER_ERROR = 500,

	/**
	 * Not Implemented
	 * @summary Server does not support this operation
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
	 */
	HTTP_501_NOT_IMPLEMENTED = 501,

	/**
	 * Bad Gateway
	 * @summary Invalid responses from another server/proxy
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
	 */
	HTTP_502_BAD_GATEWAY = 502,

	/**
	 * Service Unavailable
	 * @summary The server cannot process the request due to a high load
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
	 */
	HTTP_503_SERVICE_UNAVAILABLE = 503,

	/**
	 * Gateway Timeout
	 * @summary The gateway server did not receive a timely response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
	 */
	HTTP_504_GATEWAY_TIMEOUT = 504,

	/**
	 * HTTP Version Not Supported
	 * @summary Cannot fulfill request
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
	 */
	HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505,

	/**
	 * Variant Also Negotiates
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2295#section-8.1}
	 */
	HTTP_506_VARIANT_ALSO_NEGOTIATES = 506,

	/**
	 * Insufficient Storage
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.6}
	 */
	HTTP_507_INSUFFICIENT_STORAGE = 507,

	/**
	 * Loop Detected
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.2}
	 */
	HTTP_508_LOOP_DETECTED = 508,

	/**
	 * @summary TODO: summarize
	 * 
	 */
	HTTP_509_BANDWIDTH_LIMIT_EXCEEDED = 509,

	/**
	 * Not Extended
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2774#section-7}
	 */
	HTTP_510_NOT_EXTENDED = 510,

	/**
	 * Network Authentication Required
	 * @summary The client needs to authenticate to gain network access
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-6}
	 */
	HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511,
}

/**
 * HTTP Status Codes as defined by Node.js
 * @see {@link https://github.com/nodejs/node/blob/d7d321b071789f08c65dbb11a0e4b3b6a299af44/lib/_http_server.js#L70}
 */
export const enum NodeJsStatuses {
	/**
	 * Continue
	 * @summary Request received, please continue
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
	 */
	Continue = 100,

	/**
	 * Switching Protocols
	 * @summary Switching to new protocol; obey Upgrade header
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
	 */
	SwitchingProtocols = 101,

	/**
	 * Processing
	 * @summary TODO: summarize
	 * 
	 * @deprecated [due to lack of implementation]{@link https://tools.ietf.org/html/rfc4918#appendix-F.3}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.1}
	 */
	Processing = 102,

	/**
	 * Early Hints
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc8297#section-2}
	 */
	EarlyHints = 103,

	/**
	 * OK
	 * @summary Request fulfilled, document follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}}
	 */
	OK = 200,

	/**
	 * Created
	 * @summary Document created, URL follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
	 */
	Created = 201,

	/**
	 * Accepted
	 * @summary Request accepted, processing continues off-line
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
	 */
	Accepted = 202,

	/**
	 * Non-Authoritative Information
	 * @summary Request fulfilled from cache
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
	 */
	NonAuthoritativeInformation = 203,

	/**
	 * No Content
	 * @summary Request fulfilled, nothing follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
	 */
	NoContent = 204,

	/**
	 * Reset Content
	 * @summary Clear input form for further input
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
	 */
	ResetContent = 205,

	/**
	 * Partial Content
	 * @summary Partial content follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.1}
	 */
	PartialContent = 206,

	/**
	 * Multi-Status
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.2}
	 */
	MultiStatus = 207,

	/**
	 * Already Reported
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.1}
	 */
	AlreadyReported = 208,

	/**
	 * IM Used
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
	 */
	IMUsed = 226,

	/**
	 * Multiple Choices
	 * @summary Object has several resources — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
	 */
	MultipleChoices = 300,

	/**
	 * Moved Permanently
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
	 */
	MovedPermanently = 301,

	/**
	 * Found
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
	 */
	Found = 302,

	/**
	 * See Other
	 * @summary Object moved — see Method and URL list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
	 */
	SeeOther = 303,

	/**
	 * Not Modified
	 * @summary Document has not changed since given time
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.1}
	 */
	NotModified = 304,

	/**
	 * Use Proxy
	 * @summary You must use proxy specified in Location to access this resource
	 * 
	 * @deprecated [due to security concerns regarding in-band configuration of a proxy]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	UseProxy = 305,

	/**
	 * Temporary Redirect
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
	 */
	TemporaryRedirect = 307,

	/**
	 * Permanent Redirect
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7538#section-3}
	 */
	PermanentRedirect = 308,

	/**
	 * Bad Request
	 * @summary Bad request syntax or unsupported method
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
	 */
	BadRequest = 400,

	/**
	 * Unauthorized
	 * @summary No permission — see authorization schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.1}
	 */
	Unauthorized = 401,

	/**
	 * Payment Required
	 * @summary No payment — see charging schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
	 */
	PaymentRequired = 402,

	/**
	 * Forbidden
	 * @summary Request forbidden — authorization will not help
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
	 */
	Forbidden = 403,

	/**
	 * Not Found
	 * @summary Nothing matches the given URI
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
	 */
	NotFound = 404,

	/**
	 * Method Not Allowed
	 * @summary Specified method is invalid for this resource
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
	 */
	MethodNotAllowed = 405,

	/**
	 * Not Acceptable
	 * @summary URI not available in preferred format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
	 */
	NotAcceptable = 406,

	/**
	 * Proxy Authentication Required
	 * @summary You must authenticate with this proxy before proceeding
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.2}
	 */
	ProxyAuthenticationRequired = 407,

	/**
	 * Request Timeout
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
	 */
	RequestTimeout = 408,

	/**
	 * Conflict
	 * @summary Request conflict
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
	 */
	Conflict = 409,

	/**
	 * Gone
	 * @summary URI no longer exists and has been permanently removed
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
	 */
	Gone = 410,

	/**
	 * Length Required
	 * @summary Client must specify Content-Length
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
	 */
	LengthRequired = 411,

	/**
	 * Precondition Failed
	 * @summary Precondition in headers is false
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.2}
	 */
	PreconditionFailed = 412,

	/**
	 * Payload Too Large
	 * @summary Entity is too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
	 */
	PayloadTooLarge = 413,

	/**
	 * URI Too Long
	 * @summary URI is too long
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
	 */
	URITooLong = 414,

	/**
	 * Unsupported Media Type
	 * @summary Entity body in unsupported format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
	 */
	UnsupportedMediaType = 415,

	/**
	 * Range Not Satisfiable
	 * @summary Cannot satisfy request range
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.4}
	 */
	RangeNotSatisfiable = 416,

	/**
	 * Expectation Failed
	 * @summary Expect condition could not be satisfied
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
	 */
	ExpectationFailed = 417,

	/**
	 * I'm a teapot
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
	 */
	ImaTeapot = 418,

	/**
	 * Misdirected Request
	 * @summary Server is not able to produce a response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7540#section-9.1.2}
	 */
	MisdirectedRequest = 421,

	/**
	 * Unprocessable Entity
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.3}
	 */
	UnprocessableEntity = 422,

	/**
	 * Locked
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.4}
	 */
	Locked = 423,

	/**
	 * Failed Dependency
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.5}
	 */
	FailedDependency = 424,

	/**
	 * Upgrade Required
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2817#section-6}
	 */
	UpgradeRequired = 426,

	/**
	 * Precondition Required
	 * @summary The origin server requires the request to be conditional
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-3}
	 */
	PreconditionRequired = 428,

	/**
	 * Too Many Requests
	 * @summary The user has sent too many requests in a given amount of time ("rate limiting")
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-4}
	 */
	TooManyRequests = 429,

	/**
	 * Request Header Fields Too Large
	 * @summary The server is unwilling to process the request because its header fields are too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-5}
	 */
	RequestHeaderFieldsTooLarge = 431,

	/**
	 * Unavailable For Legal Reasons
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7725#section-3}
	 */
	UnavailableForLegalReasons = 451,

	/**
	 * Internal Server Error
	 * @summary Server got itself in trouble
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
	 */
	InternalServerError = 500,

	/**
	 * Not Implemented
	 * @summary Server does not support this operation
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
	 */
	NotImplemented = 501,

	/**
	 * Bad Gateway
	 * @summary Invalid responses from another server/proxy
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
	 */
	BadGateway = 502,

	/**
	 * Service Unavailable
	 * @summary The server cannot process the request due to a high load
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
	 */
	ServiceUnavailable = 503,

	/**
	 * Gateway Timeout
	 * @summary The gateway server did not receive a timely response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
	 */
	GatewayTimeout = 504,

	/**
	 * HTTP Version Not Supported
	 * @summary Cannot fulfill request
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
	 */
	HTTPVersionNotSupported = 505,

	/**
	 * Variant Also Negotiates
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2295#section-8.1}
	 */
	VariantAlsoNegotiates = 506,

	/**
	 * Insufficient Storage
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.6}
	 */
	InsufficientStorage = 507,

	/**
	 * Loop Detected
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.2}
	 */
	LoopDetected = 508,

	/**
	 * @summary TODO: summarize
	 * 
	 */
	BandwidthLimitExceeded = 509,

	/**
	 * Not Extended
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2774#section-7}
	 */
	NotExtended = 510,

	/**
	 * Network Authentication Required
	 * @summary The client needs to authenticate to gain network access
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-6}
	 */
	NetworkAuthenticationRequired = 511,
}

/**
 * HTTP Status Codes as defined by Spring Framework
 * @see {@link https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpStatus.html}
 */
export const enum SpringStatuses {
	/**
	 * Continue
	 * @summary Request received, please continue
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
	 */
	CONTINUE = 100,

	/**
	 * Switching Protocols
	 * @summary Switching to new protocol; obey Upgrade header
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
	 */
	SWITCHING_PROTOCOLS = 101,

	/**
	 * Processing
	 * @summary TODO: summarize
	 * 
	 * @deprecated [due to lack of implementation]{@link https://tools.ietf.org/html/rfc4918#appendix-F.3}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.1}
	 */
	PROCESSING = 102,

	/**
	 * Early Hints
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc8297#section-2}
	 */
	CHECKPOINT = 103,

	/**
	 * OK
	 * @summary Request fulfilled, document follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}}
	 */
	OK = 200,

	/**
	 * Created
	 * @summary Document created, URL follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
	 */
	CREATED = 201,

	/**
	 * Accepted
	 * @summary Request accepted, processing continues off-line
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
	 */
	ACCEPTED = 202,

	/**
	 * Non-Authoritative Information
	 * @summary Request fulfilled from cache
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
	 */
	NON_AUTHORITATIVE_INFORMATION = 203,

	/**
	 * No Content
	 * @summary Request fulfilled, nothing follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
	 */
	NO_CONTENT = 204,

	/**
	 * Reset Content
	 * @summary Clear input form for further input
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
	 */
	RESET_CONTENT = 205,

	/**
	 * Partial Content
	 * @summary Partial content follows
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.1}
	 */
	PARTIAL_CONTENT = 206,

	/**
	 * Multi-Status
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.2}
	 */
	MULTI_STATUS = 207,

	/**
	 * Already Reported
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.1}
	 */
	ALREADY_REPORTED = 208,

	/**
	 * IM Used
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc3229#section-10.4.1}
	 */
	IM_USED = 226,

	/**
	 * Multiple Choices
	 * @summary Object has several resources — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
	 */
	MULTIPLE_CHOICES = 300,

	/**
	 * Moved Permanently
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
	 */
	MOVED_PERMANENTLY = 301,

	/**
	 * Found
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
	 */
	FOUND = 302,

	/**
	 * See Other
	 * @summary Object moved — see Method and URL list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
	 */
	SEE_OTHER = 303,

	/**
	 * Not Modified
	 * @summary Document has not changed since given time
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.1}
	 */
	NOT_MODIFIED = 304,

	/**
	 * Use Proxy
	 * @summary You must use proxy specified in Location to access this resource
	 * 
	 * @deprecated [due to security concerns regarding in-band configuration of a proxy]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.5}
	 */
	USE_PROXY = 305,

	/**
	 * Temporary Redirect
	 * @summary Object moved temporarily — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
	 */
	TEMPORARY_REDIRECT = 307,

	/**
	 * Permanent Redirect
	 * @summary Object moved permanently — see URI list
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7538#section-3}
	 */
	PERMANENT_REDIRECT = 308,

	/**
	 * Bad Request
	 * @summary Bad request syntax or unsupported method
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
	 */
	BAD_REQUEST = 400,

	/**
	 * Unauthorized
	 * @summary No permission — see authorization schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.1}
	 */
	UNAUTHORIZED = 401,

	/**
	 * Payment Required
	 * @summary No payment — see charging schemes
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
	 */
	PAYMENT_REQUIRED = 402,

	/**
	 * Forbidden
	 * @summary Request forbidden — authorization will not help
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
	 */
	FORBIDDEN = 403,

	/**
	 * Not Found
	 * @summary Nothing matches the given URI
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
	 */
	NOT_FOUND = 404,

	/**
	 * Method Not Allowed
	 * @summary Specified method is invalid for this resource
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
	 */
	METHOD_NOT_ALLOWED = 405,

	/**
	 * Not Acceptable
	 * @summary URI not available in preferred format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
	 */
	NOT_ACCEPTABLE = 406,

	/**
	 * Proxy Authentication Required
	 * @summary You must authenticate with this proxy before proceeding
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7235#section-3.2}
	 */
	PROXY_AUTHENTICATION_REQUIRED = 407,

	/**
	 * Request Timeout
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
	 */
	REQUEST_TIMEOUT = 408,

	/**
	 * Conflict
	 * @summary Request conflict
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
	 */
	CONFLICT = 409,

	/**
	 * Gone
	 * @summary URI no longer exists and has been permanently removed
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
	 */
	GONE = 410,

	/**
	 * Length Required
	 * @summary Client must specify Content-Length
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
	 */
	LENGTH_REQUIRED = 411,

	/**
	 * Precondition Failed
	 * @summary Precondition in headers is false
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7232#section-4.2}
	 */
	PRECONDITION_FAILED = 412,

	/**
	 * Payload Too Large
	 * @summary Entity is too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
	 */
	PAYLOAD_TOO_LARGE = 413,

	/**
	 * URI Too Long
	 * @summary URI is too long
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
	 */
	URI_TOO_LONG = 414,

	/**
	 * Unsupported Media Type
	 * @summary Entity body in unsupported format
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
	 */
	UNSUPPORTED_MEDIA_TYPE = 415,

	/**
	 * Range Not Satisfiable
	 * @summary Cannot satisfy request range
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7233#section-4.4}
	 */
	REQUESTED_RANGE_NOT_SATISFIABLE = 416,

	/**
	 * Expectation Failed
	 * @summary Expect condition could not be satisfied
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
	 */
	EXPECTATION_FAILED = 417,

	/**
	 * I'm a teapot
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
	 */
	I_AM_A_TEAPOT = 418,

	/**
	 * Unprocessable Entity
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.3}
	 */
	UNPROCESSABLE_ENTITY = 422,

	/**
	 * Locked
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.4}
	 */
	LOCKED = 423,

	/**
	 * Failed Dependency
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.5}
	 */
	FAILED_DEPENDENCY = 424,

	/**
	 * Upgrade Required
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2817#section-6}
	 */
	UPGRADE_REQUIRED = 426,

	/**
	 * Precondition Required
	 * @summary The origin server requires the request to be conditional
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-3}
	 */
	PRECONDITION_REQUIRED = 428,

	/**
	 * Too Many Requests
	 * @summary The user has sent too many requests in a given amount of time ("rate limiting")
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-4}
	 */
	TOO_MANY_REQUESTS = 429,

	/**
	 * Request Header Fields Too Large
	 * @summary The server is unwilling to process the request because its header fields are too large
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-5}
	 */
	REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

	/**
	 * Unavailable For Legal Reasons
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7725#section-3}
	 */
	UNAVAILABLE_FOR_LEGAL_REASONS = 451,

	/**
	 * Internal Server Error
	 * @summary Server got itself in trouble
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
	 */
	INTERNAL_SERVER_ERROR = 500,

	/**
	 * Not Implemented
	 * @summary Server does not support this operation
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
	 */
	NOT_IMPLEMENTED = 501,

	/**
	 * Bad Gateway
	 * @summary Invalid responses from another server/proxy
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
	 */
	BAD_GATEWAY = 502,

	/**
	 * Service Unavailable
	 * @summary The server cannot process the request due to a high load
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
	 */
	SERVICE_UNAVAILABLE = 503,

	/**
	 * Gateway Timeout
	 * @summary The gateway server did not receive a timely response
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
	 */
	GATEWAY_TIMEOUT = 504,

	/**
	 * HTTP Version Not Supported
	 * @summary Cannot fulfill request
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
	 */
	HTTP_VERSION_NOT_SUPPORTED = 505,

	/**
	 * Variant Also Negotiates
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2295#section-8.1}
	 */
	VARIANT_ALSO_NEGOTIATES = 506,

	/**
	 * Insufficient Storage
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2518#section-10.6}
	 */
	INSUFFICIENT_STORAGE = 507,

	/**
	 * Loop Detected
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc5842#section-7.2}
	 */
	LOOP_DETECTED = 508,

	/**
	 * @summary TODO: summarize
	 * 
	 */
	BANDWIDTH_LIMIT_EXCEEDED = 509,

	/**
	 * Not Extended
	 * @summary TODO: summarize
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc2774#section-7}
	 */
	NOT_EXTENDED = 510,

	/**
	 * Network Authentication Required
	 * @summary The client needs to authenticate to gain network access
	 * 
	 * @see [RFC]{@link https://tools.ietf.org/html/rfc6585#section-6}
	 */
	NETWORK_AUTHENTICATION_REQUIRED = 511,
}

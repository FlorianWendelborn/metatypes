import { IHttpStatus } from './types'

export const statuses: IHttpStatus[] = [
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_100_CONTINUE',
			springFramework: 'CONTINUE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.1'),
			name: 'Continue',
		},
		statusCode: 100,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_101_SWITCHING_PROTOCOLS',
			springFramework: 'SWITCHING_PROTOCOLS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.2'),
			name: 'Switching Protocols',
		},
		statusCode: 101,
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc4918#appendix-F.3'),
			reason: 'due to lack of implementation',
		},
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'PROCESSING',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.1'),
			name: 'Processing',
		},
		statusCode: 102,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'CHECKPOINT',
		},
		rfc: false,
		statusCode: 103,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_200_OK',
			springFramework: 'OK',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.1}'),
			name: 'OK',
		},
		statusCode: 200,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_201_CREATED',
			springFramework: 'CREATED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.2'),
			name: 'Created',
		},
		statusCode: 201,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_202_ACCEPTED',
			springFramework: 'ACCEPTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.3'),
			name: 'Accepted',
		},
		statusCode: 202,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_203_NON_AUTHORITATIVE_INFORMATION',
			springFramework: 'NON_AUTHORITATIVE_INFORMATION',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.4'),
			name: 'Non-Authoritative Information',
		},
		statusCode: 203,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_204_NO_CONTENT',
			springFramework: 'NO_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.5'),
			name: 'No Content',
		},
		statusCode: 204,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_205_RESET_CONTENT',
			springFramework: 'RESET_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.6'),
			name: 'Reset Content',
		},
		statusCode: 205,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_206_PARTIAL_CONTENT',
			springFramework: 'PARTIAL_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.1'),
			name: 'Partial Content',
		},
		statusCode: 206,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_207_MULTI_STATUS',
			springFramework: 'MULTI_STATUS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.2'),
			name: 'Multi-Status',
		},
		statusCode: 207,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'ALREADY_REPORTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc5842#section-7.1'),
			name: 'Already Reported',
		},
		statusCode: 208,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'IM_USED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc3229#section-10.4.1'),
			name: 'IM Used',
		},
		statusCode: 226,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_300_MULTIPLE_CHOICES',
			springFramework: 'MULTIPLE_CHOICES',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.1'),
			name: 'Multiple Choices',
		},
		statusCode: 300,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_301_MOVED_PERMANENTLY',
			springFramework: 'MOVED_PERMANENTLY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.2'),
			name: 'Moved Permanently',
		},
		statusCode: 301,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_302_FOUND',
			springFramework: 'FOUND',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.3'),
			name: 'Found',
		},
		statusCode: 302,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_303_SEE_OTHER',
			springFramework: 'SEE_OTHER',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.4'),
			name: 'See Other',
		},
		statusCode: 303,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_304_NOT_MODIFIED',
			springFramework: 'NOT_MODIFIED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.1'),
			name: 'Not Modified',
		},
		statusCode: 304,
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			reason:
				'due to security concerns regarding in-band configuration of a proxy',
		},
		frameworks: {
			djangoRestFramework: 'HTTP_305_USE_PROXY',
			springFramework: 'USE_PROXY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: 'Use Proxy',
		},
		statusCode: 305,
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			reason:
				'The 306 status code was defined in a previous version of this specification, is no longer used, and the code is reserved.',
		},
		frameworks: {
			djangoRestFramework: 'HTTP_306_RESERVED',
			springFramework: false,
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: '(Unused)',
		},
		statusCode: 306,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_307_TEMPORARY_REDIRECT',
			springFramework: 'TEMPORARY_REDIRECT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.7'),
			name: 'Temporary Redirect',
		},
		statusCode: 307,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_308_PERMANENT_REDIRECT',
			springFramework: 'PERMANENT_REDIRECT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7538#section-3'),
			name: 'Permanent Redirect',
		},
		statusCode: 308,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_400_BAD_REQUEST',
			springFramework: 'BAD_REQUEST',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.1'),
			name: 'Bad Request',
		},
		statusCode: 400,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_401_UNAUTHORIZED',
			springFramework: 'UNAUTHORIZED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.1'),
			name: 'Unauthorized',
		},
		statusCode: 401,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_402_PAYMENT_REQUIRED',
			springFramework: 'PAYMENT_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.2'),
			name: 'Payment Required',
		},
		statusCode: 402,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_403_FORBIDDEN',
			springFramework: 'FORBIDDEN',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.3'),
			name: 'Forbidden',
		},
		statusCode: 403,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_404_NOT_FOUND',
			springFramework: 'NOT_FOUND',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.4'),
			name: 'Not Found',
		},
		statusCode: 404,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_405_METHOD_NOT_ALLOWED',
			springFramework: 'METHOD_NOT_ALLOWED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.5'),
			name: 'Method Not Allowed',
		},
		statusCode: 405,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_406_NOT_ACCEPTABLE',
			springFramework: 'NOT_ACCEPTABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.6'),
			name: 'Not Acceptable',
		},
		statusCode: 406,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_407_PROXY_AUTHENTICATION_REQUIRED',
			springFramework: 'PROXY_AUTHENTICATION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.2'),
			name: 'Proxy Authentication Required',
		},
		statusCode: 407,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_408_REQUEST_TIMEOUT',
			springFramework: 'REQUEST_TIMEOUT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.7'),
			name: 'Request Timeout',
		},
		statusCode: 408,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_409_CONFLICT',
			springFramework: 'CONFLICT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.8'),
			name: 'Conflict',
		},
		statusCode: 409,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_410_GONE',
			springFramework: 'GONE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.9'),
			name: 'Gone',
		},
		statusCode: 410,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_411_LENGTH_REQUIRED',
			springFramework: 'LENGTH_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.10'),
			name: 'Length Required',
		},
		statusCode: 411,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_412_PRECONDITION_FAILED',
			springFramework: 'PRECONDITION_FAILED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.2'),
			name: 'Precondition Failed',
		},
		statusCode: 412,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_413_REQUEST_ENTITY_TOO_LARGE',
			springFramework: 'PAYLOAD_TOO_LARGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.11'),
			name: 'Payload Too Large',
		},
		statusCode: 413,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_414_REQUEST_URI_TOO_LONG',
			springFramework: 'URI_TOO_LONG',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.12'),
			name: 'URI Too Long',
		},
		statusCode: 414,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_415_UNSUPPORTED_MEDIA_TYPE',
			springFramework: 'UNSUPPORTED_MEDIA_TYPE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.13'),
			name: 'Unsupported Media Type',
		},
		statusCode: 415,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE',
			springFramework: 'REQUESTED_RANGE_NOT_SATISFIABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.4'),
			name: 'Range Not Satisfiable',
		},
		statusCode: 416,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_417_EXPECTATION_FAILED',
			springFramework: 'EXPECTATION_FAILED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.14'),
			name: 'Expectation Failed',
		},
		statusCode: 417,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'I_AM_A_TEAPOT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2324#section-2.3.2'),
			name: "I'm a teapot",
		},
		statusCode: 418,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_422_UNPROCESSABLE_ENTITY',
			springFramework: 'UNPROCESSABLE_ENTITY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.3'),
			name: 'Unprocessable Entity',
		},
		statusCode: 422,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_423_LOCKED',
			springFramework: 'LOCKED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.4'),
			name: 'Locked',
		},
		statusCode: 423,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_424_FAILED_DEPENDENCY',
			springFramework: 'FAILED_DEPENDENCY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.5'),
			name: 'Failed Dependency',
		},
		statusCode: 424,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'UPGRADE_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2817#section-6'),
			name: 'Upgrade Required',
		},
		statusCode: 426,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_428_PRECONDITION_REQUIRED',
			springFramework: 'PRECONDITION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-3'),
			name: 'Precondition Required',
		},
		statusCode: 428,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_429_TOO_MANY_REQUESTS',
			springFramework: 'TOO_MANY_REQUESTS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-4'),
			name: 'Too Many Requests',
		},
		statusCode: 429,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE',
			springFramework: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-5'),
			name: 'Request Header Fields Too Large',
		},
		statusCode: 431,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS',
			springFramework: 'UNAVAILABLE_FOR_LEGAL_REASONS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7725#section-3'),
			name: 'Unavailable For Legal Reasons',
		},
		statusCode: 451,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_500_INTERNAL_SERVER_ERROR',
			springFramework: 'INTERNAL_SERVER_ERROR',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.1'),
			name: 'Internal Server Error',
		},
		statusCode: 500,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_501_NOT_IMPLEMENTED',
			springFramework: 'NOT_IMPLEMENTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.2'),
			name: 'Not Implemented',
		},
		statusCode: 501,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_502_BAD_GATEWAY',
			springFramework: 'BAD_GATEWAY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.3'),
			name: 'Bad Gateway',
		},
		statusCode: 502,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_503_SERVICE_UNAVAILABLE',
			springFramework: 'SERVICE_UNAVAILABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.4'),
			name: 'Service Unavailable',
		},
		statusCode: 503,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_504_GATEWAY_TIMEOUT',
			springFramework: 'GATEWAY_TIMEOUT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.5'),
			name: 'Gateway Timeout',
		},
		statusCode: 504,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_505_HTTP_VERSION_NOT_SUPPORTED',
			springFramework: 'HTTP_VERSION_NOT_SUPPORTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.6'),
			name: 'HTTP Version Not Supported',
		},
		statusCode: 505,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'VARIANT_ALSO_NEGOTIATES',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2295#section-8.1'),
			name: 'Variant Also Negotiates',
		},
		statusCode: 506,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_507_INSUFFICIENT_STORAGE',
			springFramework: 'INSUFFICIENT_STORAGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.6'),
			name: 'Insufficient Storage',
		},
		statusCode: 507,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'LOOP_DETECTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc5842#section-7.2'),
			name: 'Loop Detected',
		},
		statusCode: 508,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'BANDWIDTH_LIMIT_EXCEEDED',
		},
		rfc: false,
		statusCode: 509,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: false,
			springFramework: 'NOT_EXTENDED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2774#section-7'),
			name: 'Not Extended',
		},
		statusCode: 510,
	},
	{
		deprecated: false,
		frameworks: {
			djangoRestFramework: 'HTTP_511_NETWORK_AUTHENTICATION_REQUIRED',
			springFramework: 'NETWORK_AUTHENTICATION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-6'),
			name: 'Network Authentication Required',
		},
		statusCode: 511,
	},
]

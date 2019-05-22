import { IHttpStatus } from './types'

export const statuses: IHttpStatus[] = [
	{
		frameworks: {
			djangoRestFramework: 'HTTP_100_CONTINUE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.1'),
			name: 'Continue',
		},
		statusCode: 100,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_101_SWITCHING_PROTOCOLS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.2'),
			name: 'Switching Protocols',
		},
		statusCode: 101,
	},
	{
		frameworks: {
			djangoRestFramework: null, // @TODO: https://github.com/encode/django-rest-framework/pull/6692
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.1'),
			name: 'Processing',
		},
		statusCode: 102,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_200_OK',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.1}'),
			name: 'OK',
		},
		statusCode: 200,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_201_CREATED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.2'),
			name: 'Created',
		},
		statusCode: 201,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_202_ACCEPTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.3'),
			name: 'Accepted',
		},
		statusCode: 202,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_203_NON_AUTHORITATIVE_INFORMATION',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.4'),
			name: 'Non-Authoritative Information',
		},
		statusCode: 203,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_204_NO_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.5'),
			name: 'No Content',
		},
		statusCode: 204,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_205_RESET_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.6'),
			name: 'Reset Content',
		},
		statusCode: 205,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_206_PARTIAL_CONTENT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.1'),
			name: 'Partial Content',
		},
		statusCode: 206,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_207_MULTI_STATUS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.2'),
			name: 'Multi-Status',
		},
		statusCode: 207,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_300_MULTIPLE_CHOICES',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.1'),
			name: 'Multiple Choices',
		},
		statusCode: 300,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_301_MOVED_PERMANENTLY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.2'),
			name: 'Moved Permanently',
		},
		statusCode: 301,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_302_FOUND',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.3'),
			name: 'Found',
		},
		statusCode: 302,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_303_SEE_OTHER',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.4'),
			name: 'See Other',
		},
		statusCode: 303,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_304_NOT_MODIFIED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.1'),
			name: 'Not Modified',
		},
		statusCode: 304,
	},
	{
		deprecated:
			'due to security concerns regarding in-band configuration proxies',
		frameworks: {
			djangoRestFramework: 'HTTP_305_USE_PROXY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: 'Use Proxy',
		},
		statusCode: 305,
	},
	{
		deprecated:
			'The 306 status code was defined in a previous version of this specification, is no longer used, and the code is reserved.',
		frameworks: {
			djangoRestFramework: 'HTTP_306_RESERVED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: '(Unused)',
		},
		statusCode: 306,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_307_TEMPORARY_REDIRECT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.7'),
			name: 'Temporary Redirect',
		},
		statusCode: 307,
	},
	{
		frameworks: {
			djangoRestFramework: null, // @TODO: https://github.com/encode/django-rest-framework/pull/6693
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7538#section-3'),
			name: 'Permanent Redirect',
		},
		statusCode: 308,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_400_BAD_REQUEST',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.1'),
			name: 'Bad Request',
		},
		statusCode: 400,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_401_UNAUTHORIZED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.1'),
			name: 'Unauthorized',
		},
		statusCode: 401,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_402_PAYMENT_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.2'),
			name: 'Payment Required',
		},
		statusCode: 402,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_403_FORBIDDEN',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.3'),
			name: 'Forbidden',
		},
		statusCode: 403,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_404_NOT_FOUND',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.4'),
			name: 'Not Found',
		},
		statusCode: 404,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_405_METHOD_NOT_ALLOWED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.5'),
			name: 'Method Not Allowed',
		},
		statusCode: 405,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_406_NOT_ACCEPTABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.6'),
			name: 'Not Acceptable',
		},
		statusCode: 406,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_407_PROXY_AUTHENTICATION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.2'),
			name: 'Proxy Authentication Required',
		},
		statusCode: 407,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_408_REQUEST_TIMEOUT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.7'),
			name: 'Request Timeout',
		},
		statusCode: 408,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_409_CONFLICT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.8'),
			name: 'Conflict',
		},
		statusCode: 409,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_410_GONE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.9'),
			name: 'Gone',
		},
		statusCode: 410,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_411_LENGTH_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.10'),
			name: 'Length Required',
		},
		statusCode: 411,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_412_PRECONDITION_FAILED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.2'),
			name: 'Precondition Failed',
		},
		statusCode: 412,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_413_REQUEST_ENTITY_TOO_LARGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.11'),
			name: 'Payload Too Large',
		},
		statusCode: 413,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_414_REQUEST_URI_TOO_LONG',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.12'),
			name: 'URI Too Long',
		},
		statusCode: 414,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_415_UNSUPPORTED_MEDIA_TYPE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.13'),
			name: 'Unsupported Media Type',
		},
		statusCode: 415,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.4'),
			name: 'Range Not Satisfiable',
		},
		statusCode: 416,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_417_EXPECTATION_FAILED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.14'),
			name: 'Expectation Failed',
		},
		statusCode: 417,
	},
	{
		frameworks: {
			djangoRestFramework: null, // @TODO: https://github.com/encode/django-rest-framework/pull/6694
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2324#section-2.3.2'),
			name: "I'm a teapot",
		},
		statusCode: 418,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_422_UNPROCESSABLE_ENTITY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.3'),
			name: 'Unprocessable Entity',
		},
		statusCode: 422,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_423_LOCKED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.4'),
			name: 'Locked',
		},
		statusCode: 423,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_424_FAILED_DEPENDENCY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.5'),
			name: 'Failed Dependency',
		},
		statusCode: 424,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_428_PRECONDITION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-3'),
			name: 'Precondition Required',
		},
		statusCode: 428,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_429_TOO_MANY_REQUESTS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-4'),
			name: 'Too Many Requests',
		},
		statusCode: 429,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-5'),
			name: 'Request Header Fields Too Large',
		},
		statusCode: 431,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7725#section-3'),
			name: 'Unavailable For Legal Reasons',
		},
		statusCode: 451,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_500_INTERNAL_SERVER_ERROR',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.1'),
			name: 'Internal Server Error',
		},
		statusCode: 500,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_501_NOT_IMPLEMENTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.2'),
			name: 'Not Implemented',
		},
		statusCode: 501,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_502_BAD_GATEWAY',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.3'),
			name: 'Bad Gateway',
		},
		statusCode: 502,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_503_SERVICE_UNAVAILABLE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.4'),
			name: 'Service Unavailable',
		},
		statusCode: 503,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_504_GATEWAY_TIMEOUT',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.5'),
			name: 'Gateway Timeout',
		},
		statusCode: 504,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_505_HTTP_VERSION_NOT_SUPPORTED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.6'),
			name: 'HTTP Version Not Supported',
		},
		statusCode: 505,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_507_INSUFFICIENT_STORAGE',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.6'),
			name: 'Insufficient Storage',
		},
		statusCode: 507,
	},
	{
		frameworks: {
			djangoRestFramework: 'HTTP_511_NETWORK_AUTHENTICATION_REQUIRED',
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-6'),
			name: 'Network Authentication Required',
		},
		statusCode: 511,
	},
]

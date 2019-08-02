import { URL } from 'url'

import { FrameworkSupportStatus, IHttpStatus } from './types'

export const statuses: IHttpStatus[] = [
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_100_CONTINUE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_100_CONTINUE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Continue',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'CONTINUE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.1'),
			name: 'Continue',
		},
		statusCode: 100,
		summary: 'Request received, please continue',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_101_SWITCHING_PROTOCOLS',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_101_SWITCHING_PROTOCOLS',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Switching Protocols',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'SWITCHING_PROTOCOLS',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.2.2'),
			name: 'Switching Protocols',
		},
		statusCode: 101,
		summary: 'Switching to new protocol; obey Upgrade header',
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc4918#appendix-F.3'),
			reason: 'due to lack of implementation',
		},
		description: null,
		frameworks: {
			djangoRestFramework: {
				link: new URL(
					'https://github.com/encode/django-rest-framework/pull/6692'
				),
				reason:
					'Closing, as even the WebDAV extension itself has withdrawn it.',
				status: FrameworkSupportStatus.Rejected,
			},
			metatypes: {
				name: 'HTTP_102_PROCESSING',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Processing',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PROCESSING',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.1'),
			name: 'Processing',
		},
		statusCode: 102,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				link: new URL(
					'https://github.com/encode/django-rest-framework/pull/6706#issuecomment-495124364'
				),
				reason: 'WSGI can’t actually make use of the early responses',
				status: FrameworkSupportStatus.Rejected,
			},
			metatypes: {
				name: 'HTTP_103_EARLY_HINTS',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Early Hints',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'CHECKPOINT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc8297#section-2'),
			name: 'Early Hints',
		},
		statusCode: 103,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_200_OK',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_200_OK',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'OK',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'OK',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.1}'),
			name: 'OK',
		},
		statusCode: 200,
		summary: 'Request fulfilled, document follows',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_201_CREATED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_201_CREATED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Created',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'CREATED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.2'),
			name: 'Created',
		},
		statusCode: 201,
		summary: 'Document created, URL follows',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_202_ACCEPTED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_202_ACCEPTED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Accepted',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'ACCEPTED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.3'),
			name: 'Accepted',
		},
		statusCode: 202,
		summary: 'Request accepted, processing continues off-line',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_203_NON_AUTHORITATIVE_INFORMATION',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_203_NON_AUTHORITATIVE_INFORMATION',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Non-Authoritative Information',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NON_AUTHORITATIVE_INFORMATION',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.4'),
			name: 'Non-Authoritative Information',
		},
		statusCode: 203,
		summary: 'Request fulfilled from cache',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_204_NO_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_204_NO_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'No Content',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NO_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.5'),
			name: 'No Content',
		},
		statusCode: 204,
		summary: 'Request fulfilled, nothing follows',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_205_RESET_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_205_RESET_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Reset Content',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'RESET_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.3.6'),
			name: 'Reset Content',
		},
		statusCode: 205,
		summary: 'Clear input form for further input',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_206_PARTIAL_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_206_PARTIAL_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Partial Content',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PARTIAL_CONTENT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.1'),
			name: 'Partial Content',
		},
		statusCode: 206,
		summary: 'Partial content follows',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_207_MULTI_STATUS',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_207_MULTI_STATUS',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Multi-Status',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'MULTI_STATUS',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.2'),
			name: 'Multi-Status',
		},
		statusCode: 207,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_208_ALREADY_REPORTED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_208_ALREADY_REPORTED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Already Reported',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'ALREADY_REPORTED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc5842#section-7.1'),
			name: 'Already Reported',
		},
		statusCode: 208,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_226_IM_USED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_226_IM_USED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'IM Used',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'IM_USED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc3229#section-10.4.1'),
			name: 'IM Used',
		},
		statusCode: 226,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_300_MULTIPLE_CHOICES',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_300_MULTIPLE_CHOICES',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Multiple Choices',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'MULTIPLE_CHOICES',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.1'),
			name: 'Multiple Choices',
		},
		statusCode: 300,
		summary: 'Object has several resources — see URI list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_301_MOVED_PERMANENTLY',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_301_MOVED_PERMANENTLY',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Moved Permanently',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'MOVED_PERMANENTLY',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.2'),
			name: 'Moved Permanently',
		},
		statusCode: 301,
		summary: 'Object moved permanently — see URI list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_302_FOUND',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_302_FOUND',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Found',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'FOUND',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.3'),
			name: 'Found',
		},
		statusCode: 302,
		summary: 'Object moved temporarily — see URI list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_303_SEE_OTHER',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_303_SEE_OTHER',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'See Other',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'SEE_OTHER',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.4'),
			name: 'See Other',
		},
		statusCode: 303,
		summary: 'Object moved — see Method and URL list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_304_NOT_MODIFIED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_304_NOT_MODIFIED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Not Modified',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NOT_MODIFIED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.1'),
			name: 'Not Modified',
		},
		statusCode: 304,
		summary: 'Document has not changed since given time',
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			reason:
				'due to security concerns regarding in-band configuration of a proxy',
		},
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_305_USE_PROXY',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_305_USE_PROXY',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Use Proxy',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'USE_PROXY',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: 'Use Proxy',
		},
		statusCode: 305,
		summary: 'You must use proxy specified in Location to access this resource',
	},
	{
		deprecated: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			reason:
				'The 306 status code was defined in a previous version of this specification, is no longer used, and the code is reserved.',
		},
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_306_RESERVED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_306_RESERVED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				status: FrameworkSupportStatus.Unknown,
			},
			springFramework: {
				status: FrameworkSupportStatus.Unknown,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.5'),
			name: '(Unused)',
		},
		statusCode: 306,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_307_TEMPORARY_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_307_TEMPORARY_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Temporary Redirect',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'TEMPORARY_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.4.7'),
			name: 'Temporary Redirect',
		},
		statusCode: 307,
		summary: 'Object moved temporarily — see URI list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_308_PERMANENT_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_308_PERMANENT_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Permanent Redirect',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PERMANENT_REDIRECT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7538#section-3'),
			name: 'Permanent Redirect',
		},
		statusCode: 308,
		summary: 'Object moved permanently — see URI list',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_400_BAD_REQUEST',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_400_BAD_REQUEST',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Bad Request',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'BAD_REQUEST',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.1'),
			name: 'Bad Request',
		},
		statusCode: 400,
		summary: 'Bad request syntax or unsupported method',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_401_UNAUTHORIZED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_401_UNAUTHORIZED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Unauthorized',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'UNAUTHORIZED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.1'),
			name: 'Unauthorized',
		},
		statusCode: 401,
		summary: 'No permission — see authorization schemes',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_402_PAYMENT_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_402_PAYMENT_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Payment Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PAYMENT_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.2'),
			name: 'Payment Required',
		},
		statusCode: 402,
		summary: 'No payment — see charging schemes',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_403_FORBIDDEN',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_403_FORBIDDEN',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Forbidden',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'FORBIDDEN',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.3'),
			name: 'Forbidden',
		},
		statusCode: 403,
		summary: 'Request forbidden — authorization will not help',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_404_NOT_FOUND',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_404_NOT_FOUND',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Not Found',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NOT_FOUND',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.4'),
			name: 'Not Found',
		},
		statusCode: 404,
		summary: 'Nothing matches the given URI',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_405_METHOD_NOT_ALLOWED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_405_METHOD_NOT_ALLOWED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Method Not Allowed',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'METHOD_NOT_ALLOWED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.5'),
			name: 'Method Not Allowed',
		},
		statusCode: 405,
		summary: 'Specified method is invalid for this resource',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_406_NOT_ACCEPTABLE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_406_NOT_ACCEPTABLE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Not Acceptable',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NOT_ACCEPTABLE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.6'),
			name: 'Not Acceptable',
		},
		statusCode: 406,
		summary: 'URI not available in preferred format',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_407_PROXY_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_407_PROXY_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Proxy Authentication Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PROXY_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7235#section-3.2'),
			name: 'Proxy Authentication Required',
		},
		statusCode: 407,
		summary: 'You must authenticate with this proxy before proceeding',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_408_REQUEST_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_408_REQUEST_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Request Timeout',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'REQUEST_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.7'),
			name: 'Request Timeout',
		},
		statusCode: 408,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_409_CONFLICT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_409_CONFLICT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Conflict',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'CONFLICT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.8'),
			name: 'Conflict',
		},
		statusCode: 409,
		summary: 'Request conflict',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_410_GONE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_410_GONE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Gone',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'GONE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.9'),
			name: 'Gone',
		},
		statusCode: 410,
		summary: 'URI no longer exists and has been permanently removed',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_411_LENGTH_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_411_LENGTH_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Length Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'LENGTH_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.10'),
			name: 'Length Required',
		},
		statusCode: 411,
		summary: 'Client must specify Content-Length',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_412_PRECONDITION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_412_PRECONDITION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Precondition Failed',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PRECONDITION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7232#section-4.2'),
			name: 'Precondition Failed',
		},
		statusCode: 412,
		summary: 'Precondition in headers is false',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_413_REQUEST_ENTITY_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_413_REQUEST_ENTITY_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Payload Too Large',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PAYLOAD_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.11'),
			name: 'Payload Too Large',
		},
		statusCode: 413,
		summary: 'Entity is too large',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_414_REQUEST_URI_TOO_LONG',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_414_REQUEST_URI_TOO_LONG',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'URI Too Long',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'URI_TOO_LONG',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.12'),
			name: 'URI Too Long',
		},
		statusCode: 414,
		summary: 'URI is too long',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_415_UNSUPPORTED_MEDIA_TYPE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_415_UNSUPPORTED_MEDIA_TYPE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Unsupported Media Type',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'UNSUPPORTED_MEDIA_TYPE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.13'),
			name: 'Unsupported Media Type',
		},
		statusCode: 415,
		summary: 'Entity body in unsupported format',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Range Not Satisfiable',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'REQUESTED_RANGE_NOT_SATISFIABLE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7233#section-4.4'),
			name: 'Range Not Satisfiable',
		},
		statusCode: 416,
		summary: 'Cannot satisfy request range',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_417_EXPECTATION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_417_EXPECTATION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Expectation Failed',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'EXPECTATION_FAILED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.5.14'),
			name: 'Expectation Failed',
		},
		statusCode: 417,
		summary: 'Expect condition could not be satisfied',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				link: new URL(
					'https://github.com/encode/django-rest-framework/pull/6694#issuecomment-494912580'
				),
				reason: "There isn't really any practical reason for adding it.",
				status: FrameworkSupportStatus.Rejected,
			},
			metatypes: {
				name: 'HTTP_418_I_AM_A_TEAPOT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: "I'm a Teapot",
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'I_AM_A_TEAPOT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2324#section-2.3.2'),
			name: "I'm a teapot",
		},
		statusCode: 418,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				link: new URL(
					'https://github.com/encode/django-rest-framework/pull/6706'
				),
				status: FrameworkSupportStatus.PullRequest,
			},
			metatypes: {
				name: 'HTTP_421_MISDIRECTED_REQUEST',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Misdirected Request',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				status: FrameworkSupportStatus.Unknown,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7540#section-9.1.2'),
			name: 'Misdirected Request',
		},
		statusCode: 421,
		summary: 'Server is not able to produce a response',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_422_UNPROCESSABLE_ENTITY',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_422_UNPROCESSABLE_ENTITY',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Unprocessable Entity',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'UNPROCESSABLE_ENTITY',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.3'),
			name: 'Unprocessable Entity',
		},
		statusCode: 422,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_423_LOCKED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_423_LOCKED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Locked',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'LOCKED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.4'),
			name: 'Locked',
		},
		statusCode: 423,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_424_FAILED_DEPENDENCY',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_424_FAILED_DEPENDENCY',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Failed Dependency',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'FAILED_DEPENDENCY',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.5'),
			name: 'Failed Dependency',
		},
		statusCode: 424,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_426_UPGRADE_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_426_UPGRADE_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Upgrade Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'UPGRADE_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2817#section-6'),
			name: 'Upgrade Required',
		},
		statusCode: 426,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_428_PRECONDITION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_428_PRECONDITION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Precondition Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'PRECONDITION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-3'),
			name: 'Precondition Required',
		},
		statusCode: 428,
		summary: 'The origin server requires the request to be conditional',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_429_TOO_MANY_REQUESTS',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_429_TOO_MANY_REQUESTS',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Too Many Requests',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'TOO_MANY_REQUESTS',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-4'),
			name: 'Too Many Requests',
		},
		statusCode: 429,
		summary:
			'The user has sent too many requests in a given amount of time ("rate limiting")',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Request Header Fields Too Large',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-5'),
			name: 'Request Header Fields Too Large',
		},
		statusCode: 431,
		summary:
			'The server is unwilling to process the request because its header fields are too large',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Unavailable For Legal Reasons',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'UNAVAILABLE_FOR_LEGAL_REASONS',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7725#section-3'),
			name: 'Unavailable For Legal Reasons',
		},
		statusCode: 451,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_500_INTERNAL_SERVER_ERROR',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_500_INTERNAL_SERVER_ERROR',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Internal Server Error',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'INTERNAL_SERVER_ERROR',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.1'),
			name: 'Internal Server Error',
		},
		statusCode: 500,
		summary: 'Server got itself in trouble',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_501_NOT_IMPLEMENTED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_501_NOT_IMPLEMENTED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Not Implemented',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NOT_IMPLEMENTED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.2'),
			name: 'Not Implemented',
		},
		statusCode: 501,
		summary: 'Server does not support this operation',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_502_BAD_GATEWAY',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_502_BAD_GATEWAY',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Bad Gateway',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'BAD_GATEWAY',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.3'),
			name: 'Bad Gateway',
		},
		statusCode: 502,
		summary: 'Invalid responses from another server/proxy',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_503_SERVICE_UNAVAILABLE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_503_SERVICE_UNAVAILABLE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Service Unavailable',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'SERVICE_UNAVAILABLE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.4'),
			name: 'Service Unavailable',
		},
		statusCode: 503,
		summary: 'The server cannot process the request due to a high load',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_504_GATEWAY_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_504_GATEWAY_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Gateway Timeout',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'GATEWAY_TIMEOUT',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.5'),
			name: 'Gateway Timeout',
		},
		statusCode: 504,
		summary: 'The gateway server did not receive a timely response',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_505_HTTP_VERSION_NOT_SUPPORTED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_505_HTTP_VERSION_NOT_SUPPORTED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'HTTP Version Not Supported',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'HTTP_VERSION_NOT_SUPPORTED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc7231#section-6.6.6'),
			name: 'HTTP Version Not Supported',
		},
		statusCode: 505,
		summary: 'Cannot fulfill request',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_506_VARIANT_ALSO_NEGOTIATES',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_506_VARIANT_ALSO_NEGOTIATES',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Variant Also Negotiates',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'VARIANT_ALSO_NEGOTIATES',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2295#section-8.1'),
			name: 'Variant Also Negotiates',
		},
		statusCode: 506,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_507_INSUFFICIENT_STORAGE',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_507_INSUFFICIENT_STORAGE',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Insufficient Storage',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'INSUFFICIENT_STORAGE',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2518#section-10.6'),
			name: 'Insufficient Storage',
		},
		statusCode: 507,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_508_LOOP_DETECTED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_508_LOOP_DETECTED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Loop Detected',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'LOOP_DETECTED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc5842#section-7.2'),
			name: 'Loop Detected',
		},
		statusCode: 508,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_509_BANDWIDTH_LIMIT_EXCEEDED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_509_BANDWIDTH_LIMIT_EXCEEDED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Bandwidth Limit Exceeded',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'BANDWIDTH_LIMIT_EXCEEDED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: false,
		statusCode: 509,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_510_NOT_EXTENDED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_510_NOT_EXTENDED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Not Extended',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NOT_EXTENDED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc2774#section-7'),
			name: 'Not Extended',
		},
		statusCode: 510,
		summary: 'TODO: summarize',
	},
	{
		deprecated: false,
		description: null,
		frameworks: {
			djangoRestFramework: {
				name: 'HTTP_511_NETWORK_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			metatypes: {
				name: 'HTTP_511_NETWORK_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
			nodeJs: {
				name: 'Network Authentication Required',
				status: FrameworkSupportStatus.Supported,
			},
			springFramework: {
				name: 'NETWORK_AUTHENTICATION_REQUIRED',
				status: FrameworkSupportStatus.Supported,
			},
		},
		rfc: {
			link: new URL('https://tools.ietf.org/html/rfc6585#section-6'),
			name: 'Network Authentication Required',
		},
		statusCode: 511,
		summary: 'The client needs to authenticate to gain network access',
	},
]

import { URL } from 'url'

import { ICodeGenerator } from '../types'

import { BaseCodeGenerator } from './base-code-generator'

/**
 * Code Generator for Node.js
 */
export class NodeJsGenerator extends BaseCodeGenerator
	implements ICodeGenerator {
	public readonly enumName = 'NodeJsStatuses'
	public readonly frameworkName = 'Node.js'
	public readonly key = 'nodeJs'
	public readonly referenceUrl = new URL(
		'https://github.com/nodejs/node/blob/d7d321b071789f08c65dbb11a0e4b3b6a299af44/lib/_http_server.js#L70'
	)
}

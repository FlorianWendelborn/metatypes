import { promises as fs } from 'fs'

import { statuses } from './data'
import { DjangoRestFrameworkGenerator } from './frameworks/django-rest-framework'
import { MetatypesGenerator } from './frameworks/metatypes'
import { NodeJsGenerator } from './frameworks/node-js'
import { SpringFrameworkGenerator } from './frameworks/spring-framework'

const generators = [
	new MetatypesGenerator(statuses),

	// Should be sorted:
	new DjangoRestFrameworkGenerator(statuses),
	new NodeJsGenerator(statuses),
	new SpringFrameworkGenerator(statuses),
]

const run = async () => {
	const results = await Promise.all(
		generators.map(async (generator) => generator.generateTypeScriptEnums())
	)

	fs.writeFile(
		`${__dirname}/../generated/index.ts`,
		`${results.join('\n\n')}\n`
	)
}

run()

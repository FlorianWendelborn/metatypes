import { DjangoRestFrameworkGenerator } from './frameworks/django-rest-framework'
import { SpringFrameworkGenerator } from './frameworks/spring-framework'
import { statuses } from './data'
import { promises as fs } from 'fs'
import { NodeJsGenerator } from './frameworks/node-js'

const generators = [
	new DjangoRestFrameworkGenerator(statuses),
	new SpringFrameworkGenerator(statuses),
	new NodeJsGenerator(statuses),
]

async function run() {
	const results = await Promise.all(
		generators.map(async (generator) => generator.generateTypeScriptEnums())
	)

	fs.writeFile(`${__dirname}/../generated/index.ts`, results.join('\n\n'))
}

run()

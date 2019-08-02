# `@metatypes/http-statuses`

> Complete, well-documented HTTP Status Code definitions for TypeScript Projects.

## Usage

```typescript
import { Statuses } from '@metatypes/http-statuses'

async function fetchUsers() {
	const response = await fetch(/* ... */)

	switch (response.status) {
		case Statuses.HTTP_200_OK:
			return response.data

		case Statuses.HTTP_404_NOT_FOUND:
			alert('the user could not be found')
			break

		default:
			throw new Error('Unknown API Error')
	}
}
```

## Framework-Flavored Statuses

For full-stack teams, it might be advantageous to use the same naming scheme on the front- and backend. So, you can also use framework-flavored status codes.

If you’d like to add another framework, feel free to submit a pull request or create an issue.

### [Django Rest Framework](https://github.com/encode/django-rest-framework)

```typescript
import { DRFStatuses } from '@metatypes/http-statuses'

async function fetchUsers() {
	const response = await fetch(/* ... */)

	switch (response.status) {
		case DRFStatuses.HTTP_200_OK:
			return response.data

		case DRFStatuses.HTTP_404_NOT_FOUND:
			alert('the user could not be found')
			break

		default:
			throw new Error('Unknown API Error')
	}
}
```

### [Node.js](https://nodejs.org)

```typescript
import { NodeJsStatuses } from '@metatypes/http-statuses'

async function fetchUsers() {
	const response = await fetch(/* ... */)

	switch (response.status) {
		case NodeJsStatuses.OK:
			return response.data

		case NodeJsStatuses.NotFound:
			alert('the user could not be found')
			break

		default:
			throw new Error('Unknown API Error')
	}
}
```

### [Spring Framework](https://spring.io)

```typescript
import { SpringStatuses } from '@metatypes/http-statuses'

async function fetchUsers() {
	const response = await fetch(/* ... */)

	switch (response.status) {
		case SpringStatuses.OK:
			return response.data

		case SpringStatuses.NotFound:
			alert('the user could not be found')
			break

		default:
			throw new Error('Unknown API Error')
	}
}
```

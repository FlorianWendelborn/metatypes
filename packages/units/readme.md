# `@metatypes/units`

> Unit conversion metadata.

## Usage

### BinaryPrefixes

```ts
import { BinaryPrefixes } from '@metatypes/units'

const BYTES = 14233423434
const MiB = BYTES / BinaryPrefixes.Mi
```

### TimeConversion

```ts
import { TimeConversion } from '@metatypes/units'

const startDate = Date.now()
// some long process
const endDate = Date.now()

const deltaInMilliseconds = endDate - startDate
const deltaInSeconds =
	deltaInMilliseconds / TimeConversion.MILLISECONDS_PER_SECOND

alert(`Took ${deltaInSeconds}s to complete!`)
```

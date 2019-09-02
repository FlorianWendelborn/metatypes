const KIBI = 1024

/**
 * Binary Prefixes (1024-based)
 */
export enum BinaryPrefixes {
	'Ki' = KIBI,
	'Mi' = KIBI * KIBI,
	'Gi' = KIBI * KIBI * KIBI,
	'Ti' = KIBI * KIBI * KIBI * KIBI,
	'Pi' = KIBI * KIBI * KIBI * KIBI * KIBI,
	'Ei' = KIBI * KIBI * KIBI * KIBI * KIBI * KIBI,
	'Zi' = KIBI * KIBI * KIBI * KIBI * KIBI * KIBI * KIBI,
	'Yi' = KIBI * KIBI * KIBI * KIBI * KIBI * KIBI * KIBI * KIBI,
}

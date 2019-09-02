// tslint:disable: no-magic-numbers

/**
 * Binary Prefixes (IEC, 1024-based)
 *
 * @see {@link https://en.wikipedia.org/wiki/Binary_prefix}
 */
export enum BinaryPrefixes {
	/**
	 * Kibi
	 * 1024
	 */
	'Ki' = Math.pow(1024, 1),

	/**
	 * Mibi
	 * 1048576
	 */
	'Mi' = Math.pow(1024, 2),

	/**
	 * Gibi
	 * 1073741824
	 */
	'Gi' = Math.pow(1024, 3),

	/**
	 * Tebi
	 * 1099511627776
	 */
	'Ti' = Math.pow(1024, 4),

	/**
	 * Pebi
	 * 1125899906842624
	 */
	'Pi' = Math.pow(1024, 5),

	/**
	 * Exbi
	 * 1152921504606846976
	 */
	'Ei' = Math.pow(1024, 6),

	/**
	 * Zebi
	 * 1180591620717411303424
	 */
	'Zi' = Math.pow(1024, 7),

	/**
	 * Yobi
	 * 1208925819614629174706176
	 */
	'Yi' = Math.pow(1024, 8),
}

// tslint:disable: no-magic-numbers

/**
 * Typographic Dashes
 *
 * @see {@link https://en.wikipedia.org/wiki/Dash}
 */
export enum Dashes {
	/**
	 * The em dash is used in several ways. Primarily in places where a set of parentheses or a colon might otherwise be used, it can show an abrupt change in thought or be used where a full stop (period) is too strong and a comma too weak. Em dashes are also used to set off summaries or definitions.
	 *
	 * @example
	 * "Three alkali metals are the usual substituents—sodium, potassium, and lithium."
	 * @see {@link https://en.wikipedia.org/wiki/Dash#Em_dash}
	 */
	EmDash = '—',
	EmDashHTML = '&mdash;',

	/**
	 * Used to connect symmetric items, such as the two ends of a range or two competitors or alternatives, as a substitute for a hyphen in a compound when one of the connected items is more complex than a single word, and as an interruptor at sentence level, substituting for a pair of commas, parentheses, or to indicate a rhetorical pause. It is sometimes held that, when used as an interruptor, the en dash should be "open" – spaced on both sides – in contrast to the em dash, which is closed.
	 *
	 * @example
	 * "11:00 a.m.⁠–⁠1:00 p.m."
	 * @see {@link https://en.wikipedia.org/wiki/Dash#En_dash}
	 */
	EnDash = '–',
	EnDashHTML = '&ndash;',

	/**
	 * Used within numbers (e.g. phone number 555‒0199), especially in columns for maintaining alignment. Its meaning is the same as a hyphen, as represented by the hyphen-minus glyph. In contrast, the en dash is more appropriately used to indicate a range of values
	 *
	 * @example
	 * "+1‒206‒555‒0100"
	 * @see {@link https://en.wikipedia.org/wiki/Dash#Figure_dash}
	 */
	FigureDash = '‒',
	FigureDashHTML = '&#x2012;',

	/**
	 * Used to introduce quoted text.
	 *
	 * @example
	 * "―Oh Miss Douce! Miss Kennedy protested. You horrid thing!"
	 * @see {@link https://en.wikipedia.org/wiki/Dash#Horizontal_bar}
	 */
	QuotationDash = '―',
	QuotationDashHTML = '&horbar;',

	/**
	 * used to separate alternatives or approximates. In dictionaries, it is frequently used to stand in for the term being defined.
	 *
	 * @example
	 * 'henceforth (adv.) from this time forth; from now on; "⁓ she will be known as Mrs. Wales"'
	 * @see {@link https://en.wikipedia.org/wiki/Dash#Swung_dash}
	 */
	SwungDash = '⁓',
	SwungDashHTML = '&#x2053;',
}

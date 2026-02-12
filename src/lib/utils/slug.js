/**
 * Convert string to URL-friendly slug
 * @param {string} text - Text to convert
 * @returns {string} - Slugified text
 */
export function slugify(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

/**
 * Convert slug back to readable text
 * @param {string} slug - Slug to convert
 * @returns {string} - Readable text
 */
export function unslugify(slug) {
	return slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

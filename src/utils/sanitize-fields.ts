import sanitizeHtml from 'sanitize-html'

export const sanitizeFields = (obj: Record<string, unknown>) => {
	for (const key of Object.keys(obj)) {
		const value = obj[key]
		if (typeof value === 'string') {
			obj[key] = sanitizeHtml(value, {
				allowedTags: [],
				allowedAttributes: {},
			})
		}
	}
}

export function formatData(date: Date) {
	return new Intl.DateTimeFormat('pt-br', {
		dateStyle: 'short',
		timeStyle: 'medium',
	}).format(date)
}

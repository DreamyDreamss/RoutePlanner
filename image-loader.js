export default function imageLoader({ src, width, quality }) {
	return `${src}?w=${width || 100}&q=${quality || 75}`;
}

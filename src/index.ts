import exclusions from "./exclusions";

export default function filterTags(tagArray:string[]|string[][]) {

	const explicit = exclusions.explicit.map(word => new RegExp(`(^| )${String.fromCharCode(...word)}($| )`));
	
	return [...new Set(tagArray.flat())]
		.filter(tag => typeof tag === "string")
		.map(tag => tag.toLowerCase())
		.filter(tag => !(exclusions.exact.includes(tag) || hasRegexMatch(tag) || hasExplicitMatch(tag, explicit)));

}

function hasRegexMatch(tag:string) {

	for (let regex of exclusions.regex) {
		if (tag.match(regex)?.[0] === tag) {
			return true;
		}
	}

	return false;

}

function hasExplicitMatch(tag:string, explicit:RegExp[]) {

	for (let word of explicit) {
		if (tag.match(word)) {
			return true;
		}
	}

	return false;

}
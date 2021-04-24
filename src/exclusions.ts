const exclusions = {
	exact: [
		"seen live",
		"albums I own",
		"albumsiown",
		"check out",
		"all",
		"amazing",
		"soty",
		"aoty",
		"songs seen live",
		"fave",
		"love at first listen",
		"played",
		"personal favourites",
		"personal favorites",
		"hino",
		"sexy",
		"disgusting"
	],
	regex: [
		/better than.*/
	],
	explicit: [ // 96 + position in alphabet
		[115, 108, 117, 116],
		[110, 105, 103, 103, 101, 114],
		[110, 105, 103, 103, 97],
		[102, 97, 103, 103, 111, 116],
		[119, 104, 111, 114, 101]
	]
}

export default exclusions;

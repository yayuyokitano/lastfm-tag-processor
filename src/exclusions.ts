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
		"fav",
		"love at first listen",
		"played",
		"personal favourites",
		"personal favorites",
		"hino",
		"sexy",
		"jam",
		"why did i listen to this",
		"flop",
		"sex",
		"shit",
		"furry",
		"boring",
		"awful",
		"worst song ever",
		"life changing",
		"bad",
		"horrible",
		"flopped",
		"disgusting"
	],
	regex: [
		/better than.*/,
		/why does this sound like.*/
	],
	explicit: [ // 96 + position in alphabet
		[115, 108, 117, 116],
		[110, 105, 103, 103, 101, 114],
		[110, 105, 103, 103, 97],
		[102, 97, 103, 103, 111, 116],
		[119, 104, 111, 114, 101],
		[103, 97, 121]
	]
}

export default exclusions;

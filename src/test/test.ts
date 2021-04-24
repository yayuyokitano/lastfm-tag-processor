import * as assert from "assert";
import filterTags from "../index";

describe("Basic behavior", () => {

	it("Should remove duplicate entries", () => {
		assert.deepStrictEqual(filterTags(["a", "b", "c", "b"]), ["a", "b", "c"]);
	});

	it("Should force lowercase", () => {
		assert.deepStrictEqual(filterTags(["aB", "bc", "DE"]), ["ab", "bc", "de"]);
	});

	it("Should remove non-strings", () => {
		assert.deepStrictEqual(filterTags(["a", 1 as any, (void 0) as any, null as any]), ["a"]);
	});

	it("Should work with one layer deep arrays", () => {
		assert.deepStrictEqual(filterTags([["a", "b"], ["b", "c"]]), ["a", "b", "c"]);
	});

	it("Can return empty array", () => {
		assert.deepStrictEqual(filterTags([2 as any]), [])
	})

});

describe("Basic filtering", () => {

	it("Should remove exact matches", () => {
		assert.deepStrictEqual(filterTags(["seen live", "all", "ballad", "disgusting"]), ["ballad"]);
	});

	it("Should remove exact matches independent of casing", () => {
		assert.deepStrictEqual(filterTags(["SEEN live", "alL", "balLad", "disgUSting"]), ["ballad"]);
	})

	it("Should remove explicit matches", () => {
		assert.deepStrictEqual(filterTags(["a", "b", String.fromCharCode(...[115, 108, 117, 116]), "avslutning", `the word ${String.fromCharCode(...[115, 108, 117, 116])} is explicit`, `can't end with ${String.fromCharCode(...[115, 108, 117, 116])}`, `${String.fromCharCode(...[115, 108, 117, 116])} can't start tag`]), ["a", "b", "avslutning"]);
	});

	it("Should remove explicit matches independent of casing", () => {
		assert.deepStrictEqual(filterTags(["a", "b", String.fromCharCode(...[115, 108, 117, 84]), "avslutning", `the word ${String.fromCharCode(...[115, 108, 117, 84])} is explicit`, `can't end with ${String.fromCharCode(...[115, 108, 117, 84])}`, `${String.fromCharCode(...[115, 108, 117, 84])} can't start tag`]), ["a", "b", "avslutning"]);
	});

});

describe("Regex filters", () => {

	it("Should remove tags starting with \"better than\"", () => {
		assert.deepStrictEqual(filterTags(["a", "better than selena gomez", "BetTer ThAn selEnA GomEz"]), ["a"]);
	});

})
import processFetchOperation from "../../src/process/processFetchOperation";

test("processFetchOperation-skipWithNullResource", () => {
  expect(
    processFetchOperation({
      resource: null,
      path: "",
      key: undefined,
    })
  ).toEqual(null);
  expect(
    processFetchOperation({
      resource: null,
      path: "abc.def.efg",
      key: undefined,
    })
  ).toEqual(null);
  expect(
    processFetchOperation({
      resource: null,
      path: "",
      key: ["abc"],
    })
  ).toEqual([null]);
  expect(
    processFetchOperation({
      resource: null,
      path: "abc.def.efg",
      key: ["a", "b", "c"],
    })
  ).toEqual([null, null, null]);
});

test("processFetchOperation-fetchRoot", () => {
  expect(
    processFetchOperation({
      resource: { hello: "world" },
      path: "",
      key: undefined,
    })
  ).toEqual({ hello: "world" });
});

test("processFetchOperation-fetchAllChildrenOfRoot", () => {
  expect(
    processFetchOperation({
      resource: { hello: "world" },
      path: "",
      key: ["hello"],
    })
  ).toEqual(["world"]);
});

test("processFetchOperation-fetchSomeChildrenOfRoot", () => {
  expect(
    processFetchOperation({
      resource: { hello: "world", hi: "there", something: [1, 2, "a", "b"] },
      path: "",
      key: ["hello", "something"],
    })
  ).toEqual(["world", [1, 2, "a", "b"]]);
});

test("processFetchOperation-fetchSomeChildrenWithInvalidPath", () => {
  expect(() =>
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b.c.d",
      key: ["d1", "d2"],
    })
  ).toThrow(/Invalid structure/);
});

test("processFetchOperation-fetchSomeChildrenWithUndefinedKeys", () => {
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b",
      key: ["d1", "d2"],
    })
  ).toEqual([null, null]);
});

test("processFetchOperation-fetchSomeChildrenWithUndefinedPath", () => {
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b.e",
      key: ["d1", "d2"],
    })
  ).toEqual([null, null]);
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b.e.f.g",
      key: ["d1", "d2"],
    })
  ).toEqual([null, null]);
});

test("processFetchOperation-fetchSomeChildrenWithValidPath", () => {
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b",
      key: ["c", "d"],
    })
  ).toEqual(["c1", ["d1", "d2"]]);
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b.d",
      key: undefined,
    })
  ).toEqual(["d1", "d2"]);
  expect(
    processFetchOperation({
      resource: { a: { b: { c: "c1", d: ["d1", "d2"] } } },
      path: "a.b",
      key: ["d"],
    })
  ).toEqual([["d1", "d2"]]);
});

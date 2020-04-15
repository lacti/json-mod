# JSON modification protocol

Update JSON object with simple operations such as `append`, `modify`, `remove` and `fetch`. I know `fetch` is not a sort of modification but I think we should see an object before modification.

## Data types

### ResourceValue

```typescript
type SingleValue = string | number;
type KeyValue = { [key: string]: ResourceValue };
type ArrayValue = ResourceValue[];
type ResourceValue = KeyValue | ArrayValue | SingleValue;
```

### path

This is a string value and a expression of JSON path with a `.` delimiter.

```text
root.some.thing.value.key
```

## Operations

I think test codes can help to use this library.

### Append

```typescript
interface AppendOperation {
  operation: "append";
  resource: ResourceValue | null;
  path: string;
  value: KeyValue | ArrayValue;
  upsert: boolean;
}
```

Add a new `value` into the `resource` with the specified `path`. If there is no parent for that `path`, it would create all ancestor nodes as `KeyValue`. If `upsert` is true, it would update a new `value` even if already has an exising value in that `path`. Otherwise, it would throw an error.

### Modify

```typescript
interface ModifyOperation {
  operation: "modify";
  resource: ResourceValue | null;
  path: string;
  value: KeyValue | ArrayValue;
}
```

Update a new `value` into the `resource` with the specified `path`. If `path` is invalid or there is an exising value, it would throw an error.

### Remove

```typescript
type CurrentKey = undefined;
type MultipleSubKeys = string[];

interface RemoveOperation {
  operation: "remove";
  resource: ResourceValue | null;
  path: string;
  key: CurrentKey | MultipleSubKeys;
}
```

Delete a `path` from the `resource` if `value` is undefined, or delete keys in `value` from the `resource` with the specified `path`. It would be ignored even if there is nothing to delete.

### Fetch

```typescript
type CurrentKey = undefined;
type MultipleSubKeys = string[];

interface FetchOperation {
  operation: "fetch";
  resource: ResourceValue | null;
  path: string;
  key: CurrentKey | MultipleSubKeys;
}
```

Fetch a value or values from the `resource` with the specified `path`. If `path` is empty, it would fetch a whole thing. If `key` is defined as array, it would return values which can be `null[]` when there are no values mapped with keys.

## License

MIT

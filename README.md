# JSON modification protocol

Update JSON object with simple operations such as `append`, `modify` and `remove`.

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

I think source codes in `__tests__` can help to use this library.

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
  value: CurrentKey | MultipleSubKeys;
}
```

Delete a `path` from the `resource` if `value` is undefined, or delete keys in `value` from the `resource` with the specified `path`. It would be ignored even if there is nothing to delete.

## License

MIT

interface DecomposedPath {
    parentPath: string;
    currentKey: string;
}
export default function decomposePath(path: string): DecomposedPath;
export {};

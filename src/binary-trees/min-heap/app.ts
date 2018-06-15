import { Node } from '../node';

function insert<T>(node: Node<T>, value: T): Node<T> {
    if (!node) {
        node = new Node<T>(value, null, null);
        return node;
    }

    if (node.info > value) {
        node.left = insert(node.left, value);
        return node;
    }

    if (node.info < value) {
        node.right = insert(node.right, value);
        return node;
    }

    return node;
}

const data: number[] = [7, 10, 4, 3, 20, 15];

let root: Node<number> = null;

for (const x of data) {
    root = insert(root, x);
}

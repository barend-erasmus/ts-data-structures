import { Node } from '../node';

function insert<T>(node: Node<T>, value: T): Node<T> {
    if (!node) {
        node = new Node<T>(value, null, null);
        return node;
    }

    if (node.info < value) {
        node = new Node<T>(value, node, null);
        return node;
    }

    if (node.info > value) {
        if (!node.left) {
            node.left = new Node<T>(value, null, null);
            return node;
        }

        // 10 > 5
        if (node.left && node.left.info > value) {
            const temporaryNode: Node<T> = node.right;
            node.right = new Node<T>(value, null, null);

            return node;
        }

        return node;
    }

    return node;
}

const data: number[] = [7, 10, 4, 3, 20, 15];

let root: Node<number> = null;

for (const x of data) {
    root = insert(root, x);
}

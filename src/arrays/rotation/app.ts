import { MathHelper } from '../../helpers/math';

/**
 * Rotate array using temporary array
 * Time complexity : O(n)
 * Auxiliary Space : O(d)
 * @param array
 * @param d
 */
function rotateUsingTemporaryArray(array: number[], d: number): number[] {
    const temporaryArray: number[] = [];

    for (let count = 0; count < d; count++) {
        temporaryArray.push(array[0]);
        array.shift();
    }

    for (let count = 0; count < d; count++) {
        array.push(temporaryArray[count]);
    }

    return array;
}

/**
 * Rotate array using juggling algorithm
 * Time complexity : O(n)
 * Auxiliary Space : O(1)
 * @param array
 * @param d
 */
function rotateUsingJugglingAlgorithm(array: number[], d: number): number[] {
    let temp: number = null;
    let j: number = null;
    let k: number = null;

    const n: number = array.length;

    for (let i = 0; i < MathHelper.GCD(d, n); i++) {
        temp = array[i];
        j = i;
        while (true) {
            k = j + d;

            if (k >= n) {
                k = k - n;
            }

            if (k === i) {
                break;
            }

            array[j] = array[k];
            j = k;
        }
        array[j] = temp;
    }

    return array;
}

const data: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(rotateUsingTemporaryArray(data.slice(), 2));
console.log(rotateUsingJugglingAlgorithm(data.slice(), 2));

/**
 * Merge two arrays with additional space
 * Time complexity : O(n + m)
 * Auxiliary Space : O(n + m)
 * @param array1
 * @param array2
 */
function mergeWithAdditionalSpace(array1: number[], array2: number[]): number[] {
    const result: number[] = new Array(array1.length + array2.length);

    let index1: number = 0;
    let index2: number = 0;
    let index3: number = 0;

    while (index3 < result.length) {
        const value1: number = array1[index1];
        const value2: number = array2[index2];

        if (!value2 || value1 < value2) {
            result[index3] = value1;
            index3++;

            index1++;

            continue;
        }

        if (!value1 || value2 < value1) {
            result[index3] = value2;
            index3++;

            index2++;

            continue;
        }
    }

    return result;
}

const data1: number[] = [1, 4, 7, 8, 10];
const data2: number[] = [2, 3, 9];

console.log(mergeWithAdditionalSpace(data1.slice(), data2.slice()));

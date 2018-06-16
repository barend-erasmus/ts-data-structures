/**
 * Find pair with given sum using naive approach
 * Time complexity : O(n^2)
 * @param array
 * @param sum
 */
function findPairUsingNaiveApproach(array: number[], sum: number): number[] {
    for (const x of array) {
        for (const y of array) {
            if (x + y === sum) {
                return [x, y];
            }
        }
    }

    return null;
}

/**
 * Find pair with given sum using sorted array
 * Time complexity : O(nlogn)
 * @param array
 * @param sum
 */
function findPairUsingSortedApproach(array: number[], sum: number): number[] {
    array.sort();

    for (let leftIndex = 0; leftIndex < array.length; leftIndex ++) {
        for (let rightIndex = array.length; rightIndex > leftIndex; rightIndex --) {
            const x: number = array[leftIndex];
            const y: number = array[rightIndex];

            if (x + y === sum) {
                return [x, y];
            }
        }
    }

    return null;
}

const data: number[] = [8, 7, 2, 5, 3, 1];

console.log(findPairUsingNaiveApproach(data.slice(), 10));

console.log(findPairUsingSortedApproach(data.slice(), 10));

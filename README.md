# Typescript Algorithms

## SETS

[Complete Set Exercises](https://www.geeksforgeeks.org/javascript/sets-in-javascript/)

> ⚠️**IMPORTANT!** [See Set Methods in W3Schools](https://www.w3schools.com/jsref/jsref_obj_set.asp)

# Table of contents
- [Problem 1: Array Union](#problem-1-array-union)
- [Problem 2: Array Intersection](#problem-2-array-intersection)
- [Problem 3: Array Distinct](#problem-3-array-distinct)
- [Problem 4: Array or Set Disjoint](#problem-4-array-or-set-disjoint)
- [Problem 5: Array Subset of another array](#problem-5-array-subset-of-another-array)
- [Problem 6: Duplicate within K Distance](#problem-6-duplicate-within-k-distance)
- 2 Sum – Check for Pair with Target Sum
- Only Repeating Element From 1 To n-1
- Longest Consecutive Sequence
- Smallest Subarray with k Distinct Numbers

## Problem 1: Array Union

**Description:**

Union of Two Sorted Arrays
Given two sorted arrays a[] and b[], the task is to return union of both the arrays in sorted order. Union of two arrays is an array having all distinct elements that are present in either array. The input arrays may contain duplicates.

Examples:

```js
Input: a[] = {1, 1, 2, 2, 2, 4}, b[] = {2, 2, 4, 4}
Output: {1, 2, 4}
Explanation: 1, 2 and 4 are the distinct elements present in either array.

Input: a[] = {3, 5, 10, 10, 10, 15, 15, 20}, b[] = {5, 10, 10, 15, 30}
Output: {3, 5, 10, 15, 20, 30}
```
> Explanation: 3, 5, 10, 15, 20 and 30 are the distinct elements present in either array.

<details>
  <summary> Solution: </summary>
    
```jsx
function findUnion(a, b) {
    let st = new Set();
  
    // Put all elements of a[] in st
    for (let i = 0; i < a.length; i++) 
        st.add(a[i]);
    
    // Put all elements of b[] in st
    for (let i = 0; i < b.length; i++) 
        st.add(b[i]);
    
    let res = Array.from(st);
    res.sort((x, y) => x - y);
    return res;
}

let a = [1, 1, 2, 2, 2, 4];
let b = [2, 2, 4, 4];

let res = findUnion(a, b);

console.log(res.join(" "));
    
```
</details>

## Problem 2: Array Intersection
Intersection of two Arrays
Given two arrays a[] and b[], find their intersection — the unique elements that appear in both. Ignore duplicates, and the result can be in any order.

```js
Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
Output: [1, 3]
Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements

Input: a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
Output: [1]
Explanation: 1 is the only common element present in both the arrays.

Input: a[] = [1, 2, 3], b[] = [4, 5, 6]
Output: []
```
>Explanation: No common element in both the arrays.

</details>

## Problem 3: Array Distinct
Find all distinct elements in a given array
Given an integer array arr[], find all the distinct elements of the given array. The given array may contain duplicates and the output should contain every element only once.

Example: 
```js
Input: arr[] = [2, 2, 3, 3, 7, 5]
Output: [2, 3, 7, 5]
```
>Explanation : After removing the duplicates 2 and 3 we get 2 3 7 5.

<details>

  <summary> Solution: </summary>

```
function remDuplicate(arr) {
    
// Initialize set with all elements of array
const st = new Set(arr);

// Return the result array by inserting all 
// elements from hash set
return Array.from(st);
// Driver Code
const arr = [2, 2, 3, 3, 7, 5];

const res = remDuplicate(arr);
console.log(res.join(" "));
}
```

> Explanation: No common element in both the arrays.

</details>

## Problem 4: Array or Set Disjoint

Check for Disjoint Arrays or Sets
Last Updated : 06 Nov, 2024
Given two arrays a and b, check if they are disjoint, i.e., there is no element common between both the arrays.

Examples:

```js
Input: a[] = {12, 34, 11, 9, 3}, b[] = {2, 1, 3, 5} 
Output: False
Explanation: 3 is common in both the arrays.

Input: a[] = {12, 34, 11, 9, 3}, b[] = {7, 2, 1, 5} 
Output: True 
```
> Explanation: There is no common element in both the sets.

<details>
  <summary> Solution: </summary>

```ts
export function disjoint(a: number[], b: number[]): boolean {
  // reasignamos variables para crear el Set sobre el más arr + pequeño
  if (a.length > b.length){
    [a, b] = [b, a]; 
  }

  /* equivalente Clásico
  if (a.length > b.length) {
   const tmp = a;
   a = b;
   b = tmp;
  }
  */
  const s = new Set(a);
  for (const x of b) {
    if (s.has(x)) return false
  };
  return true;
}
```
</details>

## Problem 5: Array Subset of another array

Check if an array is subset of another array
Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. Both arrays are not sorted, and elements are distinct.

Examples: 

```js
Input: a[] = [11, 1, 13, 21, 3, 7], b[] = [11, 3, 7, 1] 
Output: true

Input: a[]= [1, 2, 3, 4, 5, 6], b = [1, 2, 4] 
Output: true

Input: a[] = [10, 5, 2, 23, 19], b = [19, 5, 3] 
Output: false
```
<details>
<summary>Two Pointers Solution:</summary>

```js
// Two pointers approach (Efficient)
function isSubset(a, b) {

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    // Traverse both arrays using two pointers
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            // Element in a is smaller, move to the next element in a
            i++;
        } else if (a[i] === b[j]) {
            // Element found in both arrays, move to the next element in both arrays
            i++;
            j++;
        } else {
            // Element in b not found in a, not a subset
            return false;
        }
    }

    // If we have traversed all elements in b, it is a subset
    return j === b.length;
}

//Driver code
const a = [11, 1, 13, 21, 3, 7];
const b = [11, 3, 7, 1];

if (isSubset(a, b)) {
    console.log("true");
} else {
    console.log("false");
}
```
</details>

<details>
<summary><strong>HashSet Solution (More Efficient):</strong></summary>

```js
// More efficient possible
function isSubset(a, b) {

    // Create a hash set and insert all elements of a
    const hashSet = new Set(a);

    // Check each element of b in the hash set
    for (const num of b) {
        if (!hashSet.has(num)) {
            return false;
        }
    }

    // If all elements of b are found in the hash set
    return true;
}

// Driver code
const a = [11, 1, 13, 21, 3, 7];
const b = [11, 3, 7, 1];

if (isSubset(a, b)) {
    console.log("true");
} else {
    console.log("false");
}
```
</details>

## Problem 6: Duplicate within K Distance
Duplicate within K Distance in an Array
Given an integer array arr[] and an integer k, determine whether there exist two indices i and j such that arr[i] == arr[j] and |i - j| ≤ k. If such a pair exists, return 'Yes', otherwise return 'No'.

Examples: 

```js
Input: k = 3, arr[] = [1, 2, 3, 4, 1, 2, 3, 4]
Output: No
Explanation: Each element in the given array arr[] appears twice and the distance between every element and its duplicate is 4.

Input: k = 3, arr[] = [1, 2, 3, 1, 4, 5]
Output: Yes
Explanation: 1 is present at index 0 and 3.

Input: k = 3, arr[] = [1, 2, 3, 4, 5]
Output: No
Explanation: There is no duplicate element in arr[].
```
<details> 
<summary>Solution:</summary>

```js
// JavaScript program to Check if a given array contains duplicate
// elements within k distance from each other
function checkDuplicatesWithinK(arr, k) {
    // Creates an empty hashset
    const s = new Set();

    // Traverse the input array
    for (let i = 0; i < arr.length; i++) {
    
        // If already present in hash, then we found
        // a duplicate within k distance
        if (s.has(arr[i]))
            return true;

        // Add this item to hashset
        s.add(arr[i]);

        // Remove the k+1 distant item
        if (i >= k)
            s.delete(arr[i - k]);
    }
    return false;
}

// Driver method to test above method
const arr = [10, 5, 3, 4, 3, 5, 6];
if (checkDuplicatesWithinK(arr, 3))
    console.log('Yes');
else
    console.log('No');
```
</details> 

[Back to top](#table-of-contents)


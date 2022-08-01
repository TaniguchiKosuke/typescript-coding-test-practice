function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
                return result;
            }
        }
    }

    return result;
}

// console.log(twoSum([2, 7, 11, 15], 9))

function isPalindrome(x: number): boolean {
    let xStr = x.toString(10);
    for (let i = 0; i < xStr.length / 2; i++) {
        if (xStr[i] != xStr[xStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// console.log(isPalindrome(121))

function isPalindromeV2(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let xList = [];
    while (x > 0) {
        xList.push(x % 10);
        x = Math.floor(x / 10);
    }

    for (let i = 0; i < xList.length / 2; i++) {
        if (xList[i] != xList[xList.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// isPalindromeV2(121);

function strStr(haystack: string, needle: string): number {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(strStr("helloo", "ll"));

class TreeNode {
    val: number
    children: TreeNode[]
    constructor(val?: number, children?: TreeNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.children = (children===undefined ? [] : children)
    }
}
 

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    if (root.children.length === 0) {
        return 1
    }

    let childDepthList = []
    for (let child of root.children) {
        childDepthList.push(maxDepth(child)+1)
    }

    return Math.max(...childDepthList)
};

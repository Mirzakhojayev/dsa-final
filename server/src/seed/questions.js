// Seed data for the questions collection.
//
// testCases use stdin/stdout so a single Judge0 runner works for every language:
//   input  - one JSON value per line (each line is one function argument)
//   output - the expected return value as JSON
// Linked lists and trees are passed as arrays (trees in level order, null = no node).
// Problems that allow "any order" ask for a fixed order so outputs can be compared exactly.

const tc = (input, output, hidden = false) => ({ input, output, hidden });

module.exports = [
  {
    slug: "two-sum",
    order: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    description: [
      "Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.",
      "You may assume that each input has exactly one solution, and you may not use the same element twice.",
      "Return the two indices in ascending order.",
    ].join("\n\n"),
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9",
      "-10^9 ≤ target ≤ 10^9",
      "Only one valid answer exists.",
    ],
    testCases: [
      tc("[2,7,11,15]\n9", "[0,1]"),
      tc("[3,2,4]\n6", "[1,2]"),
      tc("[3,3]\n6", "[0,1]"),
      tc("[1,5,3,8]\n11", "[2,3]", true),
      tc("[-1,-2,-3,-4,-5]\n-8", "[2,4]", true),
    ],
  },
  {
    slug: "reverse-linked-list",
    order: 2,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: [
      "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
      "The list is given as an array of node values from head to tail.",
    ].join("\n\n"),
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 5000].",
      "-5000 ≤ Node.val ≤ 5000",
    ],
    testCases: [
      tc("[1,2,3,4,5]", "[5,4,3,2,1]"),
      tc("[1,2]", "[2,1]"),
      tc("[]", "[]"),
      tc("[7]", "[7]", true),
      tc("[1,1,2,3]", "[3,2,1,1]", true),
    ],
  },
  {
    slug: "jump-game",
    order: 3,
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: [
      "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.",
      "Return `true` if you can reach the last index, or `false` otherwise.",
    ].join("\n\n"),
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
        explanation:
          "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10^4", "0 ≤ nums[i] ≤ 10^5"],
    testCases: [
      tc("[2,3,1,1,4]", "true"),
      tc("[3,2,1,0,4]", "false"),
      tc("[0]", "true", true),
      tc("[2,0,0]", "true", true),
      tc("[1,0,1,0]", "false", true),
    ],
  },
  {
    slug: "valid-parentheses",
    order: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: [
      "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.",
      "An input string is valid if open brackets are closed by the same type of brackets, open brackets are closed in the correct order, and every close bracket has a corresponding open bracket of the same type.",
    ].join("\n\n"),
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
      { input: 's = "([])"', output: "true" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10^4",
      "s consists of parentheses only '()[]{}'.",
    ],
    testCases: [
      tc('"()"', "true"),
      tc('"()[]{}"', "true"),
      tc('"(]"', "false"),
      tc('"([])"', "true"),
      tc('"([)]"', "false", true),
      tc('"{[]}"', "true", true),
      tc('"("', "false", true),
    ],
  },
  {
    slug: "search-a-2d-matrix",
    order: 5,
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Binary Search",
    description: [
      "You are given an `m x n` integer matrix `matrix` with the following two properties: each row is sorted in non-decreasing order, and the first integer of each row is greater than the last integer of the previous row.",
      "Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.",
      "You must write a solution in `O(log(m * n))` time complexity.",
    ].join("\n\n"),
    examples: [
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        output: "true",
      },
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        output: "false",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 100",
      "-10^4 ≤ matrix[i][j], target ≤ 10^4",
    ],
    testCases: [
      tc("[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3", "true"),
      tc("[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13", "false"),
      tc("[[1]]\n1", "true", true),
      tc("[[1,3]]\n2", "false", true),
      tc("[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n60", "true", true),
    ],
  },
  {
    slug: "container-with-most-water",
    order: 6,
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    description: [
      "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.",
      "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
      "Return the maximum amount of water a container can store. Notice that you may not slant the container.",
    ].join("\n\n"),
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The lines at index 1 (height 8) and index 8 (height 7) hold min(8, 7) * (8 - 1) = 49 units of water.",
      },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10^5", "0 ≤ height[i] ≤ 10^4"],
    testCases: [
      tc("[1,8,6,2,5,4,8,3,7]", "49"),
      tc("[1,1]", "1"),
      tc("[4,3,2,1,4]", "16", true),
      tc("[1,2,1]", "2", true),
    ],
  },
  {
    slug: "merge-intervals",
    order: 7,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Intervals",
    description: [
      "Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      "Return the merged intervals sorted by their start.",
    ].join("\n\n"),
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10^4",
      "intervals[i].length == 2",
      "0 ≤ start_i ≤ end_i ≤ 10^4",
    ],
    testCases: [
      tc("[[1,3],[2,6],[8,10],[15,18]]", "[[1,6],[8,10],[15,18]]"),
      tc("[[1,4],[4,5]]", "[[1,5]]"),
      tc("[[1,4],[0,4]]", "[[0,4]]", true),
      tc("[[1,4],[2,3]]", "[[1,4]]", true),
      tc("[[4,7],[1,4]]", "[[1,7]]", true),
    ],
  },
  {
    slug: "maximum-depth-of-binary-tree",
    order: 8,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    description: [
      "Given the `root` of a binary tree, return its maximum depth.",
      "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      "The tree is given as an array in level order, where `null` means there is no node.",
    ].join("\n\n"),
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" },
      { input: "root = [1,null,2]", output: "2" },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 ≤ Node.val ≤ 100",
    ],
    testCases: [
      tc("[3,9,20,null,null,15,7]", "3"),
      tc("[1,null,2]", "2"),
      tc("[]", "0", true),
      tc("[1]", "1", true),
      tc("[1,2,3,4,null,null,5,6]", "4", true),
    ],
  },
  {
    slug: "best-time-to-buy-and-sell-stock",
    order: 9,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    description: [
      "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.",
      "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    ].join("\n\n"),
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transaction is done, so the max profit is 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10^5", "0 ≤ prices[i] ≤ 10^4"],
    testCases: [
      tc("[7,1,5,3,6,4]", "5"),
      tc("[7,6,4,3,1]", "0"),
      tc("[2,4,1]", "2", true),
      tc("[1,2]", "1", true),
      tc("[3,3,5,0,0,3,1,4]", "4", true),
    ],
  },
  {
    slug: "subsets",
    order: 10,
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    description: [
      "Given an integer array `nums` of unique elements, return all possible subsets (the power set).",
      "The solution set must not contain duplicate subsets.",
      "Sort the elements inside each subset in ascending order, then sort the subsets by length, and subsets of the same length lexicographically.",
    ].join("\n\n"),
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
      },
      { input: "nums = [0]", output: "[[],[0]]" },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10",
      "-10 ≤ nums[i] ≤ 10",
      "All the numbers of nums are unique.",
    ],
    testCases: [
      tc("[1,2,3]", "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]"),
      tc("[0]", "[[],[0]]"),
      tc("[3,1]", "[[],[1],[3],[1,3]]", true),
    ],
  },
];

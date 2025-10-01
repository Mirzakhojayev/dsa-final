export type Article = {
  id: string;
  category: string;
  title: string;
  content: string;
};

export const mockArticles: Article[] = [
  {
    id: "1",
    category: "Data Structures",
    title: "Array Basics",
    content:
      "Arrays are fundamental data structures that store elements in a contiguous block of memory. They allow for efficient access and manipulation of data using indices. Common operations include traversal, insertion, deletion, and searching. Understanding arrays is crucial for solving many programming problems. Arrays can be one-dimensional or multi-dimensional, and they are widely used in various algorithms and data structures. Mastering arrays will enhance your problem-solving skills and improve your coding efficiency.",
  },
  {
    id: "2",
    category: "Math",
    title: "Article 2",
    content: "Content for article 2",
  },
  {
    id: "3",
    category: "Geometry",
    title: "Article 3",
    content: "Content for article 3",
  },
  {
    id: "4",
    category: "Data Structures",
    title: "Linked List Basics",
    content:
      "Linked lists are dynamic data structures consisting of nodes, where each node contains data and a reference to the next node. They allow for efficient insertions and deletions, especially in scenarios where the size of the data set is unknown or frequently changing. Common types of linked lists include singly linked lists, doubly linked lists, and circular linked lists. Understanding linked lists is essential for implementing various algorithms and data structures, such as stacks and queues. Mastering linked lists will improve your ability to manage memory and optimize performance in your code.",
  },
  {
    id: "5",
    category: "Data Structures",
    title: "Tree Basics",
    content:
      "Trees are hierarchical data structures consisting of nodes, where each node contains a value and references to child nodes. They are used to represent hierarchical relationships and enable efficient searching, insertion, and deletion operations. Common types of trees include binary trees, binary search trees, and AVL trees. Understanding trees is crucial for solving problems related to hierarchical data and implementing various algorithms, such as tree traversals and balancing. Mastering trees will enhance your problem-solving skills and improve your coding efficiency.",
  },
  {
    id: "6",
    category: "Math",
    title: "Number Theory Basics",
    content:
      "Number theory is a branch of mathematics that deals with the properties and relationships of integers. It encompasses various topics, including prime numbers, divisibility, modular arithmetic, and Diophantine equations. Understanding number theory is essential for solving problems related to cryptography, coding theory, and algorithm design. Key concepts include the Euclidean algorithm for finding the greatest common divisor, Fermat's Little Theorem, and the Chinese Remainder Theorem. Mastering number theory will enhance your analytical skills and improve your ability to tackle complex mathematical problems.",
  },
  {
    id: "7",
    category: "Geometry",
    title: "Coordinate Geometry Basics",
    content:
      "Coordinate geometry, also known as analytic geometry, is a branch of mathematics that uses algebraic methods to study geometric properties and relationships. It involves representing geometric shapes, such as points, lines, and curves, using a coordinate system, typically the Cartesian plane. Key concepts include the distance formula, midpoint formula, slope of a line, and equations of lines and circles. Understanding coordinate geometry is essential for solving problems related to spatial relationships and geometric transformations. Mastering coordinate geometry will enhance your problem-solving skills and improve your ability to visualize and analyze geometric concepts.",
  },
  {
    id: "8",
    category: "Calculus",
    title: "Calculus Basics",
    content:
      "Calculus is a branch of mathematics that focuses on the study of change and motion. It encompasses two main areas: differential calculus, which deals with rates of change and slopes of curves, and integral calculus, which focuses on accumulation of quantities and areas under curves. Key concepts include limits, derivatives, integrals, and the Fundamental Theorem of Calculus. Understanding calculus is essential for solving problems in physics, engineering, economics, and various scientific fields. Mastering calculus will enhance your analytical skills and improve your ability to model and solve real-world problems.",
  },
  {
    id: "9",
    category: "Data Structures",
    title: "Graph Basics",
    content:
      "Graphs are versatile data structures consisting of nodes (vertices) connected by edges. They are used to represent relationships and connections between entities, making them essential for solving problems in networking, social media, and transportation. Common types of graphs include directed and undirected graphs, weighted and unweighted graphs, and cyclic and acyclic graphs. Key concepts include graph traversal algorithms (such as Depth-First Search and Breadth-First Search), shortest path algorithms (like Dijkstra's and Bellman-Ford), and graph representations (adjacency matrix and adjacency list). Understanding graphs is crucial for implementing various algorithms and data structures, such as trees and networks. Mastering graphs will enhance your problem-solving skills and improve your coding efficiency.",
  },
  {
    id: "10",
    category: "Math",
    title: "Probability Basics",
    content:
      "Probability is a branch of mathematics that deals with the study of uncertainty and the likelihood of events occurring. It involves quantifying the chances of different outcomes in various scenarios, ranging from simple events like coin tosses to complex situations like weather forecasting and risk assessment. Key concepts include sample spaces, events, conditional probability, Bayes' theorem, and probability distributions (such as binomial, normal, and Poisson distributions). Understanding probability is essential for making informed decisions in fields like statistics, finance, machine learning, and artificial intelligence. Mastering probability will enhance your analytical skills and improve your ability to model and solve real-world problems involving uncertainty.",
  },
  {
    id: "11",
    category: "Algebra",
    title: "Algebra Basics",
    content:
      "Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols to solve equations and understand relationships between variables. It encompasses various topics, including linear equations, quadratic equations, polynomials, inequalities, and functions. Key concepts include solving for unknowns, factoring expressions, and graphing equations on the Cartesian plane. Understanding algebra is essential for solving problems in various fields, such as physics, engineering, economics, and computer science. Mastering algebra will enhance your problem-solving skills and improve your ability to analyze and interpret mathematical relationships.",
  },
  {
    id: '12',
    category: 'Algebra',
    title: 'Linear Equations',
    content: 'Linear equations are mathematical expressions that represent a straight line when graphed on a Cartesian plane. They take the form of ax + b = 0, where "a" and "b" are constants, and "x" is the variable. Solving linear equations involves isolating the variable to find its value. Key concepts include slope, y-intercept, and graphing linear functions. Understanding linear equations is essential for solving problems in various fields, such as physics, engineering, economics, and computer science. Mastering linear equations will enhance your problem-solving skills and improve your ability to analyze and interpret mathematical relationships.'
  },
  {
    id: '13',
    category: 'Geometry',
    title: 'Triangles',
    content: 'Triangles are three-sided polygons that play a fundamental role in geometry. They are classified based on their side lengths (equilateral, isosceles, scalene) and their angles (acute, right, obtuse). Key properties of triangles include the Pythagorean theorem, triangle inequality theorem, and the sum of interior angles, which always equals 180 degrees. Understanding triangles is essential for solving problems related to area, perimeter, and trigonometry. Mastering triangle properties will enhance your problem-solving skills and improve your ability to analyze geometric relationships.'
  },
  {
    id: '14',
    category: 'Calculus',
    title: 'Derivatives',
    content: 'Derivatives are a fundamental concept in calculus that measure the rate of change of a function with respect to its variable. They provide insights into the behavior of functions, such as identifying local maxima and minima, determining concavity, and analyzing motion. The derivative of a function f(x) is denoted as f\'(x) or dy/dx. Key rules for finding derivatives include the power rule, product rule, quotient rule, and chain rule. Understanding derivatives is essential for solving problems in physics, engineering, economics, and various scientific fields. Mastering derivatives will enhance your analytical skills and improve your ability to model and solve real-world problems involving change.'
  },
  {
    id: '15',
    category: 'Algebra',
    title: 'Quadratic Equations',
    content: 'Quadratic equations are polynomial equations of the form ax^2 + bx + c = 0, where "a", "b", and "c" are constants, and "a" is not equal to zero. They represent parabolic curves when graphed on a Cartesian plane. Key methods for solving quadratic equations include factoring, completing the square, and using the quadratic formula (x = [-b ± √(b^2 - 4ac)] / 2a). Understanding quadratic equations is essential for solving problems in various fields, such as physics, engineering, economics, and computer science. Mastering quadratic equations will enhance your problem-solving skills and improve your ability to analyze and interpret mathematical relationships.'
  }
];

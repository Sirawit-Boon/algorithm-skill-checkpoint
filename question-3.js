/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n) (Linear time) because The array of student is not sorted by ID,
and using a for loop through all the values in the array.

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n) (Logarithmic time) because The array of products is sorted by name,
and the binary search will loop with a time complexity of log2n.
in this case, the array has 3 key-value pairs so the count of looping is 2
*/

/* 
Which function is more efficient and why?
Answer:
Function findProductPrice is more efficient because Binary search does not loop through
all the values in the array but it eliminate the values that not matched and continue looping,
that make Binary search have time complexity lower than Linear search.
*/

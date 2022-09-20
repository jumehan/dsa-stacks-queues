/** Design how you could design a browser back/forward system
 * using two stacks, so that you can visit a series of sites
 * (Google, Yahoo, EBay, go back to Yahoo,
 * then forward again to EBay, then onto Apple, and so on).

Write pseudo-code for this.
 */


//create a double-linked list (prev, next)


// A -> B -> C -> D (stack 1)
// D -> next -> next (stack 2)
// pop D so go back to C (previous) then push stack 2 to go forward

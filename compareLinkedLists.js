function CompareLists(llist1, llist2) {
    while (llist1 && llist2) {
        if (llist1.val !== llist2.val) return 0;
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    return llist1 === null && llist2 === null ? 1 : 0;
}
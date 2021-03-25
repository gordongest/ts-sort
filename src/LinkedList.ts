// import { Sortable } from './Sorter';
import { Sorter } from './Sorter'

class Node {
  constructor(public data: number) {}

  next: Node | null = null;
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(value: number): void {
    const node = new Node(value);
    /* if there is no head, set the head to the new node */
    if (!this.head) {
      this.head = node;
      return;
    }

    /* set the tail to the current head */
    let tail = this.head;

    /* check to see if tail.next !== undefined */
    /* if so, re-set tail to be the next node in the list */
    /* keep going until tail.next === undefined */
    while (tail.next) {
      tail = tail.next;
    }
    /* once tail is found, set its next to the new node */
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    /* check each node to see if it has a next prop */
    while (node.next) {
      /* if it does, increment length */
      length++;
      /* set the node to be the next in the list */
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    /* if there is no head, bad index */
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    /* because node.next might not exist, must annotate that it could
    be either instead of allowing TS to infer from declaration */
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    /* if loop completes without a return, bad index */
    throw new Error('Index out of bounds');
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) {
      throw new Error('Nothing in list');
    }

    /* call method to get nodes at indexes, then compare values */
    return this.at(leftIdx).data > this.at(rightIdx).data;
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx);
    const rightNode = this.at(rightIdx);
    const temp = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

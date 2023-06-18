import { Sort } from "./Sorter";

export class NumbersCollection extends Sort {
  // data:number[];
  // constructor(data:number[]){
  //     this.data = data;
  // }

  // Shorthand for above code:
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

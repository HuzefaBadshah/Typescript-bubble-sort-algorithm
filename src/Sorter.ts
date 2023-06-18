//import { NumbersCollection } from "./NumbersCollection";

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sort {
  // constructor(public collection: Sortable) {}
  abstract length: number;
  abstract compare(x: number, y: number): boolean;
  abstract swap(x: number, y: number): void;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //   if (this.collection instanceof Array) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
        //   }
      }
    }
  }
}

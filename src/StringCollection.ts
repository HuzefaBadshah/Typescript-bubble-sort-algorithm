import { Sort } from "./Sorter";

export class StringCollection extends Sort {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringArr: string[] = this.data.split("");
    let leftHandVal = stringArr[leftIndex];
    stringArr[leftIndex] = stringArr[rightIndex];
    stringArr[rightIndex] = leftHandVal;
    this.data = stringArr.join("");
  }
}

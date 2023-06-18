import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
// import { Sort } from "./Sorter";
import { StringCollection } from "./StringCollection";

const numbersCollection = new NumbersCollection([0, -1, -2, 12, 8, 3, 14, 20]);
numbersCollection.sort();
// const numberSorter = new Sort(numbersCollection);
// numberSorter.sort();

const stringCollection = new StringCollection("Huzefa");
stringCollection.sort();
// const stringSorter = new Sort(stringCollection);
// stringSorter.sort();

const linkedList = new LinkedList();
linkedList.add(-1);
linkedList.add(2);
linkedList.add(1);
linkedList.add(10);
linkedList.add(-2);
linkedList.add(5);
linkedList.sort();

console.log("sorted numbers are", numbersCollection.data);
console.log("sorted strings are --->", stringCollection.data);
console.log("sorted linkedList --->", linkedList.print());

import { List } from "./06-Generics";
import { KeyValuePair } from "./06-Generics";
let nums : List<number>;
nums = new List<number>(1,2,3,4,5,6,8);
nums.add(7);
nums.remove(8);

let newData = nums.asArray();
console.log(newData);

let weekdays : List<string>;
weekdays = new List<string>("Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Saturday");
weekdays.add("Friday");
weekdays.remove("Saturday");
weekdays.remove("Sunday");
console.log(weekdays.asArray());

let pair1 : KeyValuePair<number, string>;
pair1 = new KeyValuePair<number, string>(1, "One");
console.log(pair1.getKey());
console.log(pair1.getValue());
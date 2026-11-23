import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { NoteBook } from "./models/NoteBook";
import { Storage } from "./utils/Storage";

// 1) Users
const user = new User(1, "Ahmed", "ahmed@mail.com", "123456", "01012345678", 25);
const admin = new Admin(2, "Sara", "sara@mail.com", "admin123", "01111111111", 30);

user.displayInfo();
admin.displayInfo();

// Validation
try {
    new User(3, "Test", "t@mail.com", "pass", "010", 15);
} catch (e) {
    console.log("Error:", (e as Error).message);
}

// 2) Aggregation: NoteBook بيتعمل لوحده وبعدين اليوزر يملكه
const notebook = new NoteBook("Study");
user.addNotebook(notebook);

// 3) Composition + Association
const note1 = notebook.addNote("TS", "TypeScript is a typed superset of JavaScript", user);
notebook.addNote("OOP", "Classes, inheritance, composition", user);
console.log("Preview:", note1.preview(20));
console.log("Author:", note1.author.name);

// 4) Admin بيمسح نوت
admin.manageNotes(notebook, 2);
console.log("Notes left:", notebook.getNotes().length);

// 5) Generic Storage
const numbers = new Storage<number>();
numbers.addItem(10);
numbers.addItem(20);
console.log(numbers.getAllItems());

const users = new Storage<User>();
users.addItem(user);
users.addItem(admin);
console.log(users.getAllItems().map((u) => u.name));

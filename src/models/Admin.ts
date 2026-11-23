import { User } from "./User";
import type { NoteBook } from "./NoteBook";

export class Admin extends User {
    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        super(id, name, email, password, phone, age);
    }

    // الأدمن يقدر يمسح أي نوت من أي NoteBook
    public manageNotes(notebook: NoteBook, noteId: number): void {
        const removed = notebook.removeNote(noteId);
        console.log(
            removed
                ? `Admin ${this.name} deleted note #${noteId}`
                : `Note #${noteId} not found`
        );
    }

    public override displayInfo(): void {
        super.displayInfo();
        console.log("Role: Admin");
    }
}
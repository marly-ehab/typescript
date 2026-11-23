import { Note } from "./Note";
import type { User } from "./User";

export class NoteBook {
    public name: string;
    private notes: Note[] = [];
    private nextId = 1;

    constructor(name: string) {
        this.name = name;
    }

    // Composition: الـ Note بتتعمل جوه الـ NoteBook نفسه
    public addNote(title: string, content: string, author: User): Note {
        const note = new Note(this.nextId++, title, content, author);
        this.notes.push(note);
        return note;
    }

    public removeNote(id: number): boolean {
        const index = this.notes.findIndex((n) => n.id === id);
        if (index === -1) return false;
        this.notes.splice(index, 1);
        return true;
    }

    public getNotes(): Note[] {
        return this.notes;
    }
}
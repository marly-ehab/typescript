import type { User } from "./User";

export class Note {
    public readonly id: number;
    public title: string;
    public content: string;
    public readonly userId: number;

    // Association: كل نوت ليها كاتب
    public readonly author: User;

    constructor(id: number, title: string, content: string, author: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.userId = author.id;
    }

    public preview(length: number = 30): string {
        return this.content.length > length
            ? this.content.slice(0, length) + "..."
            : this.content;
    }
}
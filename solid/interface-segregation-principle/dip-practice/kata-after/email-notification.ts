import {EmailNotification} from "./interfaces";

export class Email implements EmailNotification {
    private readonly to: string;
    private readonly subject: string;
    private readonly message: string;

    constructor(to: string, subject: string, message: string) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    public getMessage() {
        return this.message;
    }

    public getTo() {
        return this.to;
    }

    public getSubject() {
        return this.subject;
    }
}
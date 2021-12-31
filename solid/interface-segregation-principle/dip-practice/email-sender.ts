import {EmailNotification, Sender} from "./kata-after/interfaces";

export class EmailSender implements Sender {
    private email: EmailNotification;

    constructor(email: EmailNotification) {
        this.email = email;
    }

    send() {
        console.log(
            `To: ${this.email.getTo()}, Subject: ${this.email.getSubject()}, Message: ${this.email.getMessage()}`
        )
    }
}
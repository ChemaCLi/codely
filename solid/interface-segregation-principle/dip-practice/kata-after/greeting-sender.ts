import {Greeter, Sender} from "./interfaces";

export class GreetingsSender implements Greeter {
    private sender: Sender;

    public constructor(sender: Sender) {
        this.sender = sender;
    }

    public sendGreetings() {
        this.sender.send();
    }
}
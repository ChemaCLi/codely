interface Sender {
    send: () => void
}

interface EmailNotification {
    // constructor: (to: string, subject: string, content: string) => void
    getTo: () => string
    getSubject: () => string
    getMessage: () => string
}

interface User {
    getId: () => number
    getFirstName: () => string
    getEmail: () => string
    getBirthday: () => Date
}

interface EmployeeRepository {
    findEmployeesBornOn: (date: Date) => User[]
}

interface Greeter {
    sendGreetings(): void
}

export class GreetingsSender implements Greeter {
    private sender: Sender;

    public constructor(sender: Sender) {
        this.sender = sender;
    }

    public sendGreetings() {
        this.sender.send();
    }
}

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

export class FakeEmployeeRepository implements EmployeeRepository {
    findEmployeesBornOn(date: Date): User[] {
        return [{
            getId: () => 1,
            getFirstName: () => "Chema",
            getBirthday: () => new Date(),
            getEmail: () => "chemacli@mail.com"
        }];
    }

}

// Implementation sample
export class SendEmployeesBirthdayGreetingsByEmailTask {
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.employeeRepository = new FakeEmployeeRepository();
    }

    public sendGreetings() {
        const today = new Date();
        const employees = this.employeeRepository.findEmployeesBornOn(today);
        employees
            .map(employee => {
                const message = `Happy birthday, dear ${employee.getFirstName()}`;
                return new Email(employee.getEmail(), "Happy birthday!", message)
            })
            .forEach(email => {
                const emailSender = new EmailSender(email)
                const greetingsSender = new GreetingsSender(emailSender)
                greetingsSender.sendGreetings()
            })
    }
}

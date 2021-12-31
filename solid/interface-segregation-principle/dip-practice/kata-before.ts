interface Clock {}

interface EmployeeRepository {
    findEmployeesBornOn: any
}

interface Employee {
    getFirstName: any
    getEmail: any
}

class Email {
    constructor(to: any, subject: string, content: string) {
    }

    public getTo() {}
    public getSubject() {}
    public getMessage() {}
}

class EmailSender {
    public send(email: Email): void {
        console.log(
            `To: ${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`
        )
    }
}

export class BirthdayGreeter {
    private employeeRepository: EmployeeRepository;

    public constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public sendGreetings(): void {
        const today = new Date();
        this.employeeRepository.findEmployeesBornOn(today)
            .then(employees =>
                (employees as Employee[])
                    .map(employee => this.emailFor(employee))
                    .forEach(email => {
                        new EmailSender().send(email as Email)
                    })
            );
    }

    private emailFor(employee: Employee): Email {
        const message = `Happy birthday, dear ${employee.getFirstName()}`;
        return new Email(employee.getEmail(), "Happy birthday!", message);
    }
}

import {EmployeeRepository, User, EmailSender} from "./interfaces";
import {Email} from "./email";

// Implementation sample
export class BirthdayGreeter {
    private employeeRepository: EmployeeRepository;
    private emailSender: EmailSender;

    constructor(
        employeeRepository: EmployeeRepository,
        emailSender: EmailSender
    ) {
        this.employeeRepository = employeeRepository;
        this.emailSender = emailSender;
    }

    public sendGreetings() {
        const today = new Date();
        const employees = this.employeeRepository.findEmployeesBornOn(today);
        employees
            .map(employee => this.emailFor(employee))
            .forEach(email => this.emailSender.send(email));
    }

    private emailFor(employee: User): Email {
        const message = `Happy birthday, dear ${employee.getFirstName()}`;
        return new Email(employee.getEmail(), "Happy birthday!", message);
    }
}

import {EmployeeRepository} from "./interfaces";
import {GreetingsSender} from "./greeting-sender";
import {EmailSender} from "./email-sender";
import {Email} from "./email-notification";
import {FakeEmployeeRepository} from "./fake-employee-repository";

// Implementation sample
export class EmployeesBirthdayGreetingsByEmailSender {
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

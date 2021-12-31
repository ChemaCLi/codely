import {EmployeeRepository, User} from "./interfaces";

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
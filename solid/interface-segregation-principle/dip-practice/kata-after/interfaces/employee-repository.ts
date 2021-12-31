import {User} from "./user";

export interface EmployeeRepository {
    findEmployeesBornOn: (date: Date) => User[]
}

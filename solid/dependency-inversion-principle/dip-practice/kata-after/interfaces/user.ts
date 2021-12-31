export interface User {
    getId: () => number
    getFirstName: () => string
    getEmail: () => string
    getBirthday: () => Date
}
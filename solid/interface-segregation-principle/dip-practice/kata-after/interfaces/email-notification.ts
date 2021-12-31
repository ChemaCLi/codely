export interface EmailNotification {
    // constructor: (to: string, subject: string, content: string) => void
    getTo: () => string
    getSubject: () => string
    getMessage: () => string
}

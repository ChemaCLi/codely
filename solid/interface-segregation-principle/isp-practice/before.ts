interface Animal {
    fly: () => void;
    run: () => void;
    bark: () => void;
}

export class Dog implements Animal {
    public fly(): void { }

    public run(): void {
        console.log("Dog is running");
    }

    public bark(): void {
        console.log("Dog is barking");
    }
}

export class Bird implements Animal {
    public bark(): void { }
    public run(): void {
        console.log("Bird is running");
    }
    public fly(): void {
        console.log("Bird is flying");
    }
}

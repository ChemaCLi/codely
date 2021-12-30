interface Flyer {
    fly(): void
}

interface Barker {
    bark(): void
}

interface Runner {
    run(): void
}

export class Dog implements Barker, Runner {
    public run(): void {
        console.log("Dog is running");
    }

    public bark(): void {
        console.log("Dog is barking");
    }
}

export class Bird implements Flyer, Runner {
    public fly(): void {
        console.log("Bird is flying");
    }

    public run(): void {
        console.log("Bird is running");
    }
}

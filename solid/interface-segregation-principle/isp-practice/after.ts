interface Animal {
    move: (method?: string) => void;
    emmitSound?: (action: string) => void;
}

export class Dog implements Animal {
    public move(method: string = "running"): void {
        console.log(`Dog is ${method}`);
    }

    public emmitSound(action: string = "barking"): void {
        console.log(`Dog is ${action}`);
    }
}

export class Bird implements Animal {
    public move(method: "flying" | "running"): void {
        console.log(`Bird is ${method}`);
    }
}

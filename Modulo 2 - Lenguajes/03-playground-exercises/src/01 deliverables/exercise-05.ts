console.log("************** DELIVERABLE 05 *********************");
class SlotMachine {
    private coins: number;

    constructor() {
        this.coins = 0;
    }

    public play(): void {
        this.coins += 1;
        const firstSlotMachine = this.randomBool();
        const secondSlotMachine = this.randomBool();
        const thirdSlotMachine = this.randomBool();
        const winner = firstSlotMachine && secondSlotMachine && thirdSlotMachine;

        if (winner) {
            console.log(`Congratulations!!!. You won ${this.coins}!!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }

    private randomBool(): boolean {
        return Boolean(Math.random() >= 0.5);
    }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

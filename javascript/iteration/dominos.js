class Redirunt {
    constructor(name, address, delivery, specials, open) {
        this.name = name;
        this.address = address;
        this.delivery = delivery;
        this.specials = specials;
        this.open = open;
    }
    isOpen(usOpen) {
        this.open = usOpen;
        console.log(`This location is currently open: ${dominos.open}`)

    }
}

const dominos = new Redirunt("Dominos", "404 Do Somethin Ave", true, "2 for $10 L1T", false);
console.log(dominos);
dominos.isOpen('yes');
// console.log(dominos.open);
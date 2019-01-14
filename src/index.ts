interface IPokemon {
    name: string;
    type: string;
    readonly attack: number;
    readonly defense: number;

    sayHi(): string;
    profile(): string;
}

class Pokemon implements IPokemon {
    public name: string;
    public type: string;
    public readonly attack: number;
    public readonly defense: number;

    constructor(name = '', type = '') {
        this.name = name;
        this.type = type;
        this.attack = this.randomStat();
        this.defense = this.randomStat();
    }

    public sayHi(): string {
        return `${this.name}!`;
    }

    public profile(): string {
        return `
            Name: ${this.name}
            Type: ${this.type}
            Attack: ${this.attack}
            Defense: ${this.defense}
        `;
    }

    private randomStat(): number {
        return Math.floor(Math.random() * 10) + 5;
    }
}

// Bulbasaur
document.getElementById('select-bulbasaur').onclick = (e) => {
    select('Bulbasaur', 'Grass, Poison');
};

// Charmander
document.getElementById('select-charmander').onclick = (e) => {
    select('Charmander', 'Fire');
};

// Squirtle
document.getElementById('select-squirtle').onclick = (e) => {
    select('Squirtle', 'Water');
};

function select(name = '', type = '') {
    const pkm = new Pokemon(name, type);
    document.getElementById('selected').innerText = pkm.profile();
}
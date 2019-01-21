interface IPokemon {
    name: string;
    type: string;
    readonly attack: number;
    readonly defense: number;

    getPictureURL: () => string;
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

    public getPictureURL(): string {
        return `dist/images/${this.name}.jpg`;
    }

    private randomStat(): number {
        return Math.floor(Math.random() * 10) + 5;
    }
}

// Update selected Pokémon
function select(name = '', type = '') {
    const pkm = new Pokemon(name, type);
    const selectedPkmWrapper = document.getElementById('selected-pkm-wrapper');

    selectedPkmWrapper.classList.add('hidden');

    (<HTMLImageElement>document.getElementById('pkm-picture')).src = pkm.getPictureURL();
    document.getElementById('pkm-name').innerText = pkm.name;
    document.getElementById('pkm-type').innerText = pkm.type;
    document.getElementById('pkm-attack').innerText = pkm.attack.toString();
    document.getElementById('pkm-defense').innerText = pkm.defense.toString();

    selectedPkmWrapper.classList.remove('hidden');
}

/**
 * Attach events
 */
document.getElementById('select-bulbasaur').onclick = () => {
    select('Bulbasaur', 'Grass, Poison');
};

document.getElementById('select-charmander').onclick = () => {
    select('Charmander', 'Fire');
};

document.getElementById('select-squirtle').onclick = () => {
    select('Squirtle', 'Water');
};
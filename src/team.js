export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        const herosCount = this.members.size;
        this.members.add(character);
        if (herosCount === this.members.size) {
          throw new Error('Error: The hero was added before');
        }
    }
    
    addAll(...characters) {
        characters.forEach((character) => this.members.add(character));
    }
    
    toArray() {
        const arr = [];
        this.members.forEach((member) => arr.push(member));
        return arr;
    }
}
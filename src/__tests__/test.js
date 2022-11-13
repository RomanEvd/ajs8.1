import Team from "../team.js";

const magician = {
    health: 100,
    type: 'Magician',
    level: 1,
    attack: 10,
    defence: 40
};

const bowman = {
    health: 100,
    type: 'Bowman',
    level: 1,
    attack: 25,
    defence: 25
};

const daemon = {
    health: 100,
    type: 'Daemon',
    level: 1,
    attack: 10,
    defence: 40
};

const swordsman = {
    health: 100,
    type: 'Swordsman',
    level: 1,
    attack: 40,
    defence: 10
};

const zombie = {
    health: 100,
    type: 'Zombie',
    level: 1,
    attack: 40,
    defence: 10
};

const undead = {
    health: 100,
    type: 'Undead',
    level: 1,
    attack: 25,
    defence: 25
};

const heroList = new Team();
heroList.add(zombie);

test('to check that hero is added', () => {
    const result = new Set([zombie]);
    expect(heroList.members).toEqual(result);
});

test('to check that method Team.add(member) is trowing error', () => {
    expect(() => {heroList.add(zombie)}).toThrow('Error: The hero was added before');
});

test('to check the method Team.addAll(...members) adds list of heros', () => {
    const result = new Set([zombie, daemon, bowman, magician, undead]);
    heroList.addAll(daemon, bowman, magician, undead);
    expect(heroList.members).toEqual(result);
});

test('to check the method Team.toArray() triggers array of heroes', () => {
    heroList.addAll(daemon, bowman, magician, undead);
    expect(heroList.toArray()).toEqual([zombie, daemon, bowman, magician, undead]);
});
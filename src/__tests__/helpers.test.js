import { searchHelper, splitSearchTerms, getSpells } from '../components/helpers.js'
import spells from '../api/spells.json'

describe('searchHelper', () => {
  it('Should return web spell from spells database', () => {
    const testTerm = 'web'
    const actual = spells.spells.filter(spell => {
      if(searchHelper(spell.name, testTerm)) {
        return spell
      }
    })
    const expected = [{
      "name":"Web",
      "desc":"<p>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.</p><p>If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.</p><p>Each creature that starts its turn in the webs or that enters them during its turn must make a dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.</p><p>A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.</p><p>The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.</p>",
      "page":"phb 287",
      "range":"60 feet",
      "components":"V, S, M",
      "material":"A bit of spiderweb.",
      "ritual":"no",
      "duration":"Up to 1 hour",
      "concentration":"yes",
      "casting_time":"1 action",
      "level":"2nd-level",
      "school":"Conjuration",
      "classes":["Druid", "Sorcerer", "Wizard"],
      "archetype":"Druid: Underdark",
      "circles":"Underdark"
    },]
    expect(actual).toEqual(expected)
  })
  it('Should return result regardless of case', () => {
    const testTerm = 'wEb'
    const actual = spells.spells.filter(spell => {
      if(searchHelper(spell.name, testTerm)) {
        return spell
      }
    })
    const expected = [{
      "name":"Web",
      "desc":"<p>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.</p><p>If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.</p><p>Each creature that starts its turn in the webs or that enters them during its turn must make a dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.</p><p>A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.</p><p>The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.</p>",
      "page":"phb 287",
      "range":"60 feet",
      "components":"V, S, M",
      "material":"A bit of spiderweb.",
      "ritual":"no",
      "duration":"Up to 1 hour",
      "concentration":"yes",
      "casting_time":"1 action",
      "level":"2nd-level",
      "school":"Conjuration",
      "classes":["Druid", "Sorcerer", "Wizard"],
      "archetype":"Druid: Underdark",
      "circles":"Underdark"
    },]
    expect(actual).toEqual(expected)
  })
})

describe('splitSearchTerms', () => {
  it('Should split terms by commas or spaces', () => {
    const testString = 'cleric, level 1 necromancy'
    const actual = splitSearchTerms(testString)
    const expected = ['cleric', 'level 1', 'necromancy']
    expect(actual).toEqual(expected)
  })
})

describe('getSpells', () => {
  it('Should return a GET response of spells', () => {
    const result = getSpells()
    expect(result).to.not.be.empty()
  })
})

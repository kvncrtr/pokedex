import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-specs',
  templateUrl: './poke-specs.component.html',
  styleUrls: ['./poke-specs.component.css']
})
export class PokeSpecsComponent implements OnInit {
  pokemon: any ;
  species: any;
  weakness: any;
  evol: any[] = [];
  img = '../../../../assets/type-badges/'
  charm = '../../../../assets/type-charm-backgrounds/'
  headerBackground = '../.../../../../../assets/type-backgrounds/'
  
  constructor(
    private route: ActivatedRoute,
    private poke: PokemonService
  ) {}

  ngOnInit(): void {
    this.snapshot()
    this.loadPokemon()
    this.loadSpecies()
  }

  snapshot() {
    this.pokemon = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

  loadPokemon() {
    this.poke.getMorePokemonData(this.pokemon.name).subscribe(data => {
      this.pokemon = {
        ...this.pokemon,
        ...data
      }
      this.loadWeakness(this.pokemon.types[0].type.url)
    })
  }
  
  loadSpecies() {
    this.poke.getSpeciesData(this.pokemon.name).subscribe(data => {
      this.species = {
        ...data
      }
      this.loadStageOne(data.evolution_chain.url)
    })
  }

  loadWeakness(url: string) {
    this.poke.getWeakness(url).subscribe(data => {
      this.weakness = data.damage_relations.double_damage_from[0].name
    })
  }

  loadStageOne(evolUrl: string) {
    this.poke.getEvolution(evolUrl).subscribe(data => {
      const workingData = {...data};
      const level1 = workingData.chain.species;
      const pluckedUrl = workingData.chain.species.url
      const parts = pluckedUrl.split('/')
      const lastNumber = parts[parts.length - 2]
      this.poke.getMorePokemonData(level1.name).subscribe(info => {
        this.evol.push({
          id: lastNumber,
          name: level1.name,
          sprites: info.sprites.front_default
        })
        if (workingData.chain.evolves_to.length > 0) {
          let level2 = workingData.chain.evolves_to[0].species
          this.loadStageTwo(level2.name, level2.url, workingData)
        }
      })
    })
  }
  
  loadStageTwo(name: string, url: string, data: any) {
    const parts = url.split('/')
    const lastNumber = parts[parts.length - 2]
    this.poke.getMorePokemonData(name).subscribe(info => {
      this.evol.push({
        id: lastNumber,
        name: name,
        sprites: info.sprites.front_default
      })
    })
    if (data.chain.evolves_to[0].evolves_to.length > 0) {
      let level3 = data.chain.evolves_to[0].evolves_to[0].species
      this.loadStageThree(level3.name, level3.url)
    }
  }

  loadStageThree(name: string, url: string) {
    const parts = url.split('/')
    const lastNumber = parts[parts.length - 2]
    this.poke.getMorePokemonData(name).subscribe(info => {
      this.evol.push({
        id: lastNumber,
        name: name,
        sprites: info.sprites.front_default
      })
    })
    this.evol.sort((a, b) => +b.id - +a.id)
  }

  back() {
    window.history.back()
  }
}

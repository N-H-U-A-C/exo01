import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Pokemon} from "../../domain/pokemon";

@Component({
  selector: 'app-pokemon.form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pokemon.form.component.html',
  styleUrl: './pokemon.form.component.css'
})
export class PokemonFormComponent {

  pokemonForm: FormGroup = new FormGroup({
    pokemonName: new FormControl(""),
    pokemonDesc: new FormControl(""),
    pokemonType: new FormControl(""),
    area: new FormGroup({
      areaName: new FormControl(""),
      areaRegion: new FormControl("")
    }),
  });

  savePokemon() {
    // const pokemon: Pokemon = {}
    console.log(this.pokemonForm.value);
  }
}

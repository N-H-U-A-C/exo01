import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
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
  types: string[] = ["Fire", "Water", "Ground", "Dark", "Dragon", "Psy"]

  pokemonForm = new FormGroup({
    pokemonName: new FormControl(""),
    pokemonDesc: new FormControl(""),
    pokemonType: new FormControl([]),
    area: new FormGroup({
      areaName: new FormControl(""),
      areaRegion: new FormControl("")
    }),
    attacks: new FormArray([
      new FormGroup({
        attackName: new FormControl(""),
        attackDesc: new FormControl(""),
        attackDamage: new FormControl(0),
      })
    ]),
  });

  savePokemon() {
    console.log(this.pokemonForm.value);
    this.pokemonForm.reset();
  }

  addAttack() {
    this.pokemonForm.controls.attacks.push(new FormGroup({
      attackName: new FormControl(""),
      attackDesc: new FormControl(""),
      attackDamage: new FormControl(0),
    }))
  }
}

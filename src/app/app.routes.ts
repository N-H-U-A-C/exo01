import {Routes} from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SerieComponent} from "./pages/serie/serie.component";
import {createComponent} from "@angular/core";
import {LibraryComponent} from "./pages/library/library.component";
import {PokemonFormComponent} from "./pages/pokemon.form/pokemon.form.component";
import {ChuckNorrisComponent} from "./pages/chuck-norris/chuck-norris.component";

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'series', component: SerieComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'pokemon-form', component: PokemonFormComponent},
  {path: 'chuck-norris', component: ChuckNorrisComponent},
];

import { Component } from '@angular/core';
import {SortPipe} from "../../utils/pipes/sort.pipe";

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [
    SortPipe
  ],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  series: string[] = ["The Wire", "Soprano", "Oz"];
  sort: string = "asc";

  remove(serie: string) {
    this.series.splice(this.series.indexOf(serie), 1);
  }

  toggleSort() {
    this.sort = this.sort === "asc" ? "desc" : "asc";
    console.log(this.sort);
  }
}

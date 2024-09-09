import {Component, OnInit} from '@angular/core';
import {ChuckNorrisService} from "../../utils/services/chuck-norris.service";

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent implements OnInit {

  chuckNorrisFact: string = "";

  constructor(private chuckNorrisService: ChuckNorrisService) {
  }

  ngOnInit() {
    this.chuckNorrisService
      .getRandom()
      .subscribe({
        next: fact => this.chuckNorrisFact = fact.value,
      });
  }
}

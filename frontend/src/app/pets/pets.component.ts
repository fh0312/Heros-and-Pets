import { Component , OnInit} from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit{
  Pets: Pet[] = [];

  constructor(private PetsService: PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.PetsService.getPets()
    .subscribe(Pets => this.Pets = Pets);
  }
}

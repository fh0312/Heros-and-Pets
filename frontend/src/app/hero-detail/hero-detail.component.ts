import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  Pets: Pet[] = [];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private petsService: PetsService,
    private loc: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPets();
  }


  
  getHero(): void {
    const id =this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getPets(): void {
    this.petsService.getPets()
    .subscribe((Pets: any) => this.Pets = Pets);
  }



  goBack(): void {
    this.loc.back();
  }



  save(): void {    
    if (this.hero) {      
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
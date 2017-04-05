import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from '../option.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {OptionService} from '../option.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-continue-story',
  templateUrl: './continue-story.component.html',
  styleUrls: ['./continue-story.component.css'],
  providers: [OptionService]
})
export class ContinueStoryComponent implements OnInit{
option;
storyOption:string = null;

  ngOnInit(){
    console.log("initializing");
    this.route.params.forEach((urlParameters) => {
      this.storyOption = urlParameters['id'];
    });
    this.optionService.getOptionById(this.storyOption).subscribe(dataLasEmittedFromObserver => {
      this.option = dataLasEmittedFromObserver;
      console.log(this.option);
    });
  }

  ngDoCheck(){

  }

  goToStoryA(option){
    this.router.navigate(['continue-story', option.storyA]);
    this.optionService.getOptionById(this.storyOption).subscribe(dataLasEmittedFromObserver => {
      this.option = dataLasEmittedFromObserver;
    });
  }
  goToStoryB(option){
    this.router.navigate(['continue-story', option.storyB]);
    this.optionService.getOptionById(this.storyOption).subscribe(dataLasEmittedFromObserver => {
      this.option = dataLasEmittedFromObserver;
    });
  }
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private optionService:OptionService) {}
}

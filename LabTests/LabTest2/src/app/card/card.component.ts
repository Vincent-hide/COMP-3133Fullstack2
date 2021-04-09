import {Component, OnInit, Input} from '@angular/core';
import {Mission} from '../type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() mission: Mission;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // console.log('MISSION!!!', this.mission.links.mission_patch_small);
  }

  navigate(mission: Mission): void {
    this.router.navigate([`/mission/${mission.flight_number}`]);
  }
}

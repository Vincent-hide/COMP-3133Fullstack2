import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mission} from '../type';
import {DataService} from '../data.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  mission: Mission;
  flightNumber: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.flightNumber = parseInt(params.id, 10);
    });
  }

  ngOnInit(): void {
    this.dataService.getById(this.flightNumber).subscribe((data: any) => {
      this.mission = data;
    });
  }

  debug(): void {
    console.log('MISSIONS BEBE', this.mission);
  }
}

import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  missions = [];
  gridColumns = 3;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAll().subscribe((data: any[]) => {
      this.missions = data;
    });
  }

  debug(msg: string, variable: any): void {
    console.log(`${msg} ${variable}`);
  }

  toggleGridColumns(): void {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}

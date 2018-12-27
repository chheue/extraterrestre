import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../_services/info.service';
import { Info } from '../../../_models/info.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [InfoService]
})
export class IndexComponent implements OnInit {
  info: Info[] = [];
  constructor(private infoservice: InfoService) { }

  ngOnInit() {
    this.infoservice.getInfo().subscribe(res => {
      this.info = res[0];
    });
  }
}

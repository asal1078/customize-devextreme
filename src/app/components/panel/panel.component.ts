import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  dataSource!: DataSource;
  public loading = true

  scores = [
    {
      lesson: 'ریاضی',
      score: '20'
    },
    {
      lesson: 'علوم',
      score: '20'
    },
    {
      lesson: 'ادبیات',
      score: '20'
    },
    {
      lesson: 'ورزش',
      score: '20'
    },
    {
      lesson: 'دینی',
      score: '20'
    },
    {
      lesson: 'هنر',
      score: '20'
    },
    {
      lesson: 'هنر',
      score: '20'
    },
    {
      lesson: 'هنر',
      score: '20'
    }
  ]

  constructor() {
    this.loading = true;
   }

  ngOnInit(): void {
    
  }

  ngAfterViewChecked():void {
    this.loading = false
  }

}

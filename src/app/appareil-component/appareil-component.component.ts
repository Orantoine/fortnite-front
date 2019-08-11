import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../service/appareil.service';

@Component({
  selector: 'app-appareil-component',
  templateUrl: './appareil-component.component.html',
  styleUrls: ['./appareil-component.component.scss']
})
export class AppareilComponentComponent implements OnInit {


  @Input() appareilName: string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil: number;
  @Input() id : number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé'){
      return 'green';
    }
    else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  }

  OnSwitchOne(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  OffSwitchOne(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }


}

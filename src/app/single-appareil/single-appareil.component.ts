import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../service/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  statut: string = 'Status';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(' l id est : '+id)
    this.name = this.appareilService.getAppareilByid(+id).name;
    this.statut = this.appareilService.getAppareilByid(+id).status;
  }

}

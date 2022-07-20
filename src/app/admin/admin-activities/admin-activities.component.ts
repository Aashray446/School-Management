import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html',
  styleUrls: ['./admin-activities.component.scss'],
})
export class AdminActivitiesComponent implements OnInit {

  constructor() { }
    // VARIABLES TO CONTROL NAV
  adm: boolean = false;
  teach: boolean = false;
  nav: boolean = true;
  noti: boolean = false;
  resu: boolean = false;
  eve: boolean = false;
  // HURRRAYYY ENDS

  ngOnInit(): void {
  }
  toogle = (data:number) => {
    if( data == 0) {
      this.adm = true;
    }
    else if (data == 1 ) {
      this.teach = true;
    }
    else if  (data == 2) {
      this.noti = true;
    }
    else if (data == 3) {
      this.resu = true;
    }
    else if (data == 4) {
      this.eve = true;
    }
    this.nav = false;
  }
  close() {
    this.adm= false;
    this.teach= false;
    this.nav= true;
    this.noti = false;
    this.resu= false;
    this.eve= false;
  }
}

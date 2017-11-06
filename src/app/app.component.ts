import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appAFL';

  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyALYzT9egSo5Ot-Ynftl3Tk-U32lDCI_dE",
      authDomain: "comprasapp-fdc30.firebaseapp.com"
    });
  }
}

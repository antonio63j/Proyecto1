import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usodirectivainputhijo',
  templateUrl: './usodirectivainputhijo.component.html',
  styleUrls: ['./usodirectivainputhijo.component.css']
})
export class UsodirectivainputhijoComponent implements OnInit {
  @Input() titulo: string;
  @Input() aviso: string;

  constructor() { }

  ngOnInit() {
  }

}

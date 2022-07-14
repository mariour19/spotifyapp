import { Component, Output,EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-artists-input',
  templateUrl: './artists-input.component.html',
  styleUrls: ['./artists-input.component.css']
})
export class ArtistsInputComponent implements OnInit {
  termino:string='';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string='';
  constructor() { }

  ngOnInit(): void {
  }
  buscar(){

    this.onEnter.emit(this.termino);
  
  }
  
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() label: string = 'Search';
  @Output() clickEnLupa: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLupa() {
    this.clickEnLupa.emit('evento lanzado desde el componente hijo');
  }

}

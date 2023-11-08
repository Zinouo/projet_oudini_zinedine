// src/app/components/search/search.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}

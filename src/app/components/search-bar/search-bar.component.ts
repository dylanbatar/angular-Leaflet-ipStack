import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() textWord: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.textWord.emit('179.13.52.41');
  }

  handlerInputChange(inputText: string) {
    this.textWord.emit(inputText);
  }
}

import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() title:string = ""
  @Input() data:any[]= []
  @Output() selectedValue= new EventEmitter()
  constructor(){}
  
  ngOnInit(): void{

  }
  detectchanges(event:any){
    this.selectedValue.emit(event)

  }
}

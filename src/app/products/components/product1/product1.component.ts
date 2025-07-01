import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product1',
  standalone: false,
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.scss'
})
export class Product1Component {
  @Input() data:any ={}
  @Output() item =new EventEmitter()
  constructor(){}
  
  ngOnInit(): void {

  }
  add(){
  this.item.emit(this.data)
  }

}

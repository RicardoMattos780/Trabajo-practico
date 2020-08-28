import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public Monto:any;

  IVA = 0;
  IT = 0;
  Utilidad = 0;
  constructor() {}

  calcularSuma() {
       this.IVA = this.Monto*0.13;  
       this.IT = this.Monto*0.03;
       this.Utilidad = this.Monto - this.IVA - this.IT;
  }
}

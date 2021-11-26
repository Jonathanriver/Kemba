import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.page.html',
  styleUrls: ['./simulador.page.scss'],
})
export class SimuladorPage implements OnInit {

  Valor = 1000;
  Dias = 1;
  Multinivel: any;
  Nombre: any;
  Acepta: any;
  Show: boolean = false;

  constructor(
    private router: Router,
    public storage: Storage
  ) { }

  async ngOnInit() {

    this.Nombre = await this.storage.get('name');
    this.Show = false;

  }

 

  Solicitud() {
    this.router.navigate(['/resumen-solicitud']);
  }

  Notificacion() {
    this.router.navigate(['/notificacion']);
  }

  Dashboard() {
    this.router.navigate(['/dashboard']);
  }

  Historial() {
    this.router.navigate(['/historial']);
  }

  Siguiente(){
    this.router.navigate(['/preguntas']);
  }

  Salir(){
    this.router.navigate(['/inicio'])
  }

}

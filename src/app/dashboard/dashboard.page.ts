import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Nombre: any;
  constructor(
    private router: Router,
    public storage: Storage
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');

    console.log(this.Nombre);
  }

  Productos() {
    this.router.navigate(['/dashboard']);
  }

  Credito() {
    this.router.navigate(['/credi-bankem']);
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

  Salir() {
    this.storage.remove('Usuario');
    this.storage.remove('name');
    this.router.navigate(['/inicio']);
  }


}

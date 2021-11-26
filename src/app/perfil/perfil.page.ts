import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
Nombre: any;
  constructor(
    private router: Router,
    public storage: Storage
  ) { }

  async ngOnInit() {
    this.Nombre = await this.storage.get('name');
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
    this.router.navigate(['/inicio']);
  }

}

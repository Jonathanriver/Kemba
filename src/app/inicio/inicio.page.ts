import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProviderService } from '../provider.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  arrayPosts: any;
  usuario: any;
  record: any;
  password: any;
  FINISH: any;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    public postServices: ProviderService,
    public storage: Storage
  ) {

  }

  ngOnInit() {
    this.presentLoadingBasic();
  }


  getPosts() {
    this.presentLoadingBasic();
    this.postServices.getPosts(this.usuario, this.password, this.record)
      .then(data => {
        this.arrayPosts = data;
        this.presentLoading();

        this.storage.remove('Usuario');
        this.storage.remove('name');

        this.storage.set('name', data['response']['nombre']);
        this.storage.set('Usuario', data['response']);
       

        console.log(data['response']);
        this.router.navigate(['/dashboard']);
      });
  }


  Registrar() {
    this.router.navigate(['/registrar']);
  }

  ResetPass() {
    this.router.navigate(['/reset-pass']);
  }


  async presentLoadingBasic() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'circles',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Haga click en cualquier parte de la pantalla para cerrara esta ventana de espera',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);

  }



}

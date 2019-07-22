import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {

    constructor(private alertController: AlertController) { }
    async show(message?: string) {
        const alert = await this.alertController.create({
            message: message ? message : 'This is an alert.',
            buttons: ['OK']
        });

        await alert.present();
    }

}
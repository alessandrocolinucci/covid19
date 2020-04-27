import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class LoadingService {

  private isLoading: boolean = false;
  private loader: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  async show(message?: string, options?: any) {
    this.isLoading = true;
    return await this.loadingController.create({
      message
    }).then(loader => {
      this.loader = loader;
      this.loader.present().then(() => {
        if (!this.isLoading) {
          this.loader.dismiss();
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return this.loader ? await this.loader.dismiss() : Promise.resolve();
  }

}
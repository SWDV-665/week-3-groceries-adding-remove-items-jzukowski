import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Lettuce",
      quantity: 1
    },
    {
      name: "Lemons",
      quantity: 2
    },
    {
      name: "Potato Chips",
      quantity: 2
    },
    {
      name: "Bananas",
      quantity: 6
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: `${item.name} has been deleted`,
      duration: 3000
    });
    toast.present();

    this.items.splice(index,1);
  }

  addItem() {
    this.showPrompt();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Add Item",
      message: "Please enter item...",
      inputs: [
        {
          name: "name",
          placeholder: "Name"
        },
        {
          name: "quantity",
          placeholder: "Quantity"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancelled");
          }
        },
        {
          text: "Save",
          handler: data => {
            this.items.push(data);
            console.log("saved");
          }
        }
      ],
    });
    prompt.present();
  }

}

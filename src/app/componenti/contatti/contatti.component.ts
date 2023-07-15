import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus, sendForm } from '@emailjs/browser';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  sendEmail(e: any) {
    e.preventDefault();
    emailjs.sendForm('service_1f4kblf', 'template_2yyeuas', e.target as HTMLFormElement, 'Wo0uKX14aKJiipEP2')
      .then((result: EmailJSResponseStatus) => {
        alert('Email inviata con successo!');
        
        //resetta form dopo invio 
        (e.target as HTMLFormElement).reset()
      }, (error) => {
        alert('Oops... ' + JSON.stringify(error.text));
      });


   }
}

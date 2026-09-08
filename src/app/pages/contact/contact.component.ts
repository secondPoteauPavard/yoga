import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
}

/**
 * Formulaire de contact — v1 sans backend.
 * À la connexion d'une API / plateforme d'emailing, remplacer `envoyer()`
 * par un vrai appel HTTP. En attendant, le formulaire ouvre un e-mail
 * pré-rempli vers lesouffleoceanique@gmail.com pour rester fonctionnel.
 */
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form: ContactForm = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: '',
  };

  envoyer() {
    const sujet = encodeURIComponent(this.form.objet || 'Contact depuis le site');
    const corps = encodeURIComponent(
      `Nom : ${this.form.nom}\nPrénom : ${this.form.prenom}\nEmail : ${this.form.email}\nTéléphone : ${this.form.telephone}\n\n${this.form.message}`
    );
    window.location.href = `mailto:lesouffleoceanique@gmail.com?subject=${sujet}&body=${corps}`;
  }
}

import * as randomColor from 'randomcolor';
import * as moment from 'moment';

export class ContactModel {
    public gender: string;
    public firstname: string;
    public lastname: string;
    public name: string;
    public street: string;
    public city: string;
    public state: string;
    public postcode: string;
    public email: string;
    public identifier: string;
    public phone: string;
    public cell: string;
    public picture: string;
    public registered: string;
    public birthday: string;
    public daysUntilBirthday: string;
    public color: string;

    constructor(contact?: any) {
        if (!contact) {
            return;
        }

        this.gender = contact.gender;
        this.firstname = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
        this.lastname = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
        this.name = this.firstname + ' ' + this.lastname;
        this.street = contact.location.street;
        this.city = contact.location.city;
        this.state = contact.location.state;
        this.postcode = contact.location.postcode;
        this.email = contact.email;
        this.identifier = contact.login.uuid;
        this.phone = contact.phone;
        this.cell = contact.cell;
        this.picture = contact.picture.large;
        this.birthday = moment(contact.dob.date).format('MMMM D');
        this.daysUntilBirthday = moment(contact.dob.date).add(contact.dob.age + 1, 'years').fromNow();
        this.registered = moment(contact.registered.date).format('YYYY-MM-DD');
        this.color = randomColor({ seed: this.identifier });
    }

    public static mapModels(contacts: Array<any>): Array<ContactModel> {
        const models = [];
        contacts.forEach(c => {
            models.push(new ContactModel(c));
        });

        return models;
    }
}

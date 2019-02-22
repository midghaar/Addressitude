
export class ContactModel {
    public gender: string;
    public name: any;
    public street: string;
    public city: string;
    public state: string;
    public postcode: string;
    public email: string;
    public identifier: string;
    public phone: string;
    public cell: string;
    public picture: string;

    constructor(contact: any) {
        this.gender = contact.gender;
        this.name = `${contact.name.first} ${contact.name.last}`;
        this.street = contact.location.street;
        this.city = contact.location.city;
        this.state = contact.location.state;
        this.postcode = contact.location.postcode;
        this.email = contact.email;
        this.identifier = contact.login.uuid;
        this.phone = contact.phone;
        this.cell = contact.cell;
        this.picture = contact.picture.large;
    }

    public static mapModels(contacts: Array<any>): Array<ContactModel> {
        const models = [];
        contacts.forEach(c => {
            models.push(new ContactModel(c));
        });

        return models;
    }
}

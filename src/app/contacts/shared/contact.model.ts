import * as randomColor from 'randomcolor';
import * as moment from 'moment';

/**
 * Model for contact objects.
 */
export class ContactModel {
    /**
     * The gender of the contact.
     */
    public gender: string;
    /**
     * The firstname of the contact.
     */
    public firstname: string;
    /**
     * The lastname of the contact.
     */
    public lastname: string;
    /**
     * The full name of the contact.
     */
    public name: string;
    /**
     * Street address of the contact.
     */
    public street: string;
    /**
     * City of the contact.
     */
    public city: string;
    /**
     * The (geographical) state of the contact.
     */
    public state: string;
    /**
     * Postcode of the contact.
     */
    public postcode: string;
    /**
     * A link to google maps showing the home location of the contact.
     */
    public mapUrl: string;
    /**
     * Email of the contact.
     */
    public email: string;
    /**
     * Unique identifier of the contact.
     */
    public identifier: string;
    /**
     * Landline phone number of the contact.
     */
    public phone: string;
    /**
     * Mobile phone number of the contact.
     */
    public cell: string;
    /**
     * Picture of the contact.
     */
    public picture: string;
    /**
     * The date the contact registered.
     */
    public registered: string;
    /**
     * The birthday of the contact.
     */
    public birthday: string;
    /**
     * A string representation of the days until the contacts birthday.
     */
    public daysUntilBirthday: string;
    /**
     * A unique color for the user. Seeded to ensure same color every time.
     */
    public color: string;
    /**
     * Indicates if the contact should be expanded in list views.
     */
    public expanded: boolean;

    constructor(contact?: any) {
        if (!contact) {
            return;
        }

        this.gender = contact.gender;
        this.firstname = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
        this.lastname = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
        this.name = this.firstname + ' ' + this.lastname;
        this.street = contact.location.street.charAt(0).toUpperCase() + contact.location.street.slice(1);
        this.city = contact.location.city.charAt(0).toUpperCase() + contact.location.city.slice(1);
        this.state = contact.location.state.charAt(0).toUpperCase() + contact.location.state.slice(1);
        this.postcode = contact.location.postcode;
        this.mapUrl = `https://maps.google.com/?q=${contact.location.coordinates.latitude},${contact.location.coordinates.longitude}`;
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

    /**
     * Maps an array of loose contact objects from the api end point to an `Array` of `ContactModel`.
     * @param contacts Array of contacts to map
     */
    public static mapModels(contacts: Array<any>): Array<ContactModel> {
        const models = [];
        contacts.forEach(c => {
            models.push(new ContactModel(c));
        });

        return models;
    }
}

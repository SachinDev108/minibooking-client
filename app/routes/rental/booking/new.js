import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  renderTemplate() {
    this.render('rental.booking.new', { into: 'application' });
  },
  actions: {
    save() {
      const rental = this.modelFor('rental');
      const newBooking = this.get('store').createRecord('booking', this.currentModel);
      newBooking.set('rental', rental);
      newBooking.save().then(() => {
        this.transitionTo('rentals');
      });
    },
    cancel() {
      this.transitionTo('rentals');
    }
  }
});
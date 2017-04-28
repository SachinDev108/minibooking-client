import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals');
  this.route('rental.new', { path: 'rentals/new' });
  this.route('rental.edit', {path: 'rentals/:rental_id/edit'});
  this.resource('rental', { path: 'rentals/:rental_id' }, function() {
    this.route('booking.new', { path: 'bookings/new' });
  });
});

export default Router;

import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  emailAddress: '',
  isDisabled: computed('emailAddress', function() {
    return this.get('emailAddress') === '';
  })
});

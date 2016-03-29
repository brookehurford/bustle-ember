import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    updateForm(){
      this.toggleProperty('updateFormShowing');
      // this.updateFormShowing=!this.updateFormShowing;
    }
  }
});

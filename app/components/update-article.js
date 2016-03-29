import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    updateForm(){
      this.toggleProperty('updateFormShowing');
    },
    updateFormSubmit(){
      var formInputs = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        image: this.get('image'),
        body: this.get('body')
      };
      this.toggleProperty('updateFormShowing');
      this.sendAction('update', this.article, formInputs);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  createFormShowing: false,
  actions: {
    toggleDetail() {
      this.toggleProperty('showDetail');
    },
    createFormSubmit() {
      var formInputs = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        image: this.get('image'),
        body: this.get('body')
      };
      this.toggleProperty('showDetail');
      this.sendAction('createArticle', formInputs);
    }
  }
});

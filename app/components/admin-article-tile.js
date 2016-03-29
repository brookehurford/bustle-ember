import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article){
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    },
    update(article, formInputs){
      this.sendAction('update', article, formInputs);
    }
  }
});

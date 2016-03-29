import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    },
    update(article, formInputs){
      Object.keys(formInputs).forEach(function(key) {
        if(formInputs[key]!==undefined) {
          article.set( key , formInputs[key] );
        }
      });
      article.save();
      this.transitionTo('admin');
    }
  }
});

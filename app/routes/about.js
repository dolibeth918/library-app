import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 'something',
        title: 'Something'
      },
      {
        id: 'something else',
        title: 'testing something else'
      }
    ];
  }
});

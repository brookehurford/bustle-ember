export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('admin'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
  this.hasClass('fade-demo'),
  this.use('fade', 1000)
);
}

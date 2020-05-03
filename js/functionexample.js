const obj = {
  message: ['hi', 'this', 'is', 'gaurish'],
  print: function() {
    console.log(this.message.join(','));
  }
}
obj.print();

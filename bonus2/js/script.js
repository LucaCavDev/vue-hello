// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus: Aggiungere un’immagine presa anch’essa da un data

// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

var radice = new Vue({
  el: '#root',
  data: {
    message: 'Hello Duck'
  }
});


new Vue({
  el: '#app',
  data: {
    myImage: ''
  },

  methods: {
    myFunction: function () {
      this.myImage = './img/duck.jpg';
    }
  }
});

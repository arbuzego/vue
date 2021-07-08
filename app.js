const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите заметку',
      inputValue: '',
      notes: ['Руки помыть', 'Попу подмыть'],
    };
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      if (this.inputValue != '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    deleteNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
};

const app = Vue.createApp(App).mount('#app');

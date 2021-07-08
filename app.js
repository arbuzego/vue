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
    addNote() {
      if (this.inputValue != '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    deleteNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    countDoubleComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
    },
  },
};

const app = Vue.createApp(App).mount('#app');

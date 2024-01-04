Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal.trim().length > 0) {
        this.goals.push(this.enteredGoal);
        this.enteredGoal = "";
      }
    },
    clearGoal(index) {
      this.goals.splice(index, 1);
    },
  },
}).mount("#user-goal");

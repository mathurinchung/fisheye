export default class ObserversSubject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.filter(obs => obs !== observer)
  }

  dispatch() {
    this.observers.forEach(observer => observer.init());
  }
}

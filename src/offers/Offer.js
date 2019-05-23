export default class Offer {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Offer(value);
  }
}

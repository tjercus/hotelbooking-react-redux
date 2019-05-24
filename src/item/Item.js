export default class Item {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Item(value);
  }
}

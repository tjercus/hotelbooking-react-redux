import Item from "../item/Item";

/**
 * Store that persists and retrieves from localStorage.
 */
export default class OffersRepository {

  constructor() {
  	this.STORAGE_ID = "hotelbooking";

  	let offers = this.getOffers();
  	if (offers.length === 0) {
      offers.push(Item.of({id: "1", name: "Hotel New York", price: 34.95} ));
      offers.push(Item.of({id: "2", name: "Hostel Hospitable Amsterdam", price: 12.95} ));
      this.putOffers(offers);
    }
  	console.log("offers in localstorage is now", offers);
  }

  /**
   * @returns {Item[]} offers
   */
  // TODO return promise so the user can use it async (to practise redux-thunk or redux-observable for example)
  getOffers() {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_offers") || "[]");
  }

  /**
   * @param {Item[]} offers
  */
  putOffers(offers) {
    localStorage.setItem(this.STORAGE_ID + "_offers", JSON.stringify(offers));
  }

  /**
   * @param {Item} offer
  */
  addOffer(offer) {
    let offers = this.getOffers();
    offers.push(offer);
    this.putOffers(offers);
  }
}

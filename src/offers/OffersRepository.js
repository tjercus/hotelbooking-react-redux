"use strict";

import Offer from "./Offer";

/**
 * Store that persists and retrieves from localStorage.
 */
export default class OffersRepository {

  constructor() {
  	this.STORAGE_ID = "hotelbooking";

  	let offers = this.getOffers();
  	if (offers.length === 0) {
      offers.push(Offer.of({id: "1", name: "Hotel New York", price: 34.95} ));
      offers.push(Offer.of({id: "2", name: "Hostel Hospitable Amsterdam", price: 12.95} ));
      this.putOffers(offers);
    }
  }

  /**
   * @returns {Offer[]} offers
   */
  getOffers() {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_offers") || "[]");
  }

  /**
   * @param {Offer[]} offers
  */
  putOffers(offers) {
    localStorage.setItem(this.STORAGE_ID + "_offers", JSON.stringify(offers));
  }

  /**
   * @param {Offer} offer
  */
  addOffer(offer) {
    let offers = this.getOffers();
    offers.push(offer);
    this.putOffers(offers);
  }
}

"use strict";

import Item from "../item/Item";

export default class CartRepository {

  constructor(eventbus) {
    this.eventbus = eventbus;
    this.STORAGE_ID = "hotelbooking";
    this.eventbus.on("CARTSTORE_ADD_CMD", ((offer) => {
      this.addOfferToCart(offer);
    }));
    this.eventbus.on("CARTSTORE_GETALL_CMD", (() => {
      this.eventbus.emit("CARTSTORE_GETALL_EVT", this.getCart());
    }));
    this.eventbus.on("CARTSTORE_REMOVE_CMD", ((offer) => {
      this.removeOfferFromCart(offer);
    }));
    this.eventbus.on("CARTSTORE_SUMMARIZE_CMD", (() => {
      this.getCartAmount();
    }));
  }

  /**
   * @returns {Item[]} cart
   */
  getCart() {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_cart") || "[]");
  }

  /**
   * @param {Item[]} cart
  */
  putCart(cart) {
    localStorage.setItem(this.STORAGE_ID + "_cart", JSON.stringify(cart));
    this.eventbus.emit("CARTSTORE_CHANGED_EVT", cart);
  }

  /**
   * @param {Item} offer
   */
  addOfferToCart(offer) {
    let cart = this.getCart();
    if (typeof offer === "string" || offer instanceof String) {
      offer = JSON.parse(offer);
    }
    cart.push(offer);
    this.putCart(cart);
  }

  /**
   */
  getCartAmount() {
    let amount = 0.0;
    this.getCart().map(offer => amount += offer.price);
    this.eventbus.emit("CARTSTORE_SUMMARIZED_EVT", Math.round(amount * 100) / 100);
  }

  /**
   * @param {Item} offer
   */
  removeOfferFromCart(offer) {
    let cart = this.getCart();
    for (var i = 0, len = cart.length; i < len; i++) {
      if (cart[i].id !== undefined && cart[i].id === offer.id) {
        cart.splice(i, 1);
        this.putCart(cart);
        return cart;
      }
    }
    this.putCart(cart);
  }
}

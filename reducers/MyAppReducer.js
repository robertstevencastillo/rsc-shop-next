import { SHOP_DATA } from "../data/shop-data";

export default function MyAppReducer(draftState, action) {
  switch (action.type) {
    case "HATS":
      draftState.activeShopPageItems = [...SHOP_DATA.hats.items];
      draftState.activeShopPageList = "hats";
      break;
    case "SHOES":
      draftState.activeShopPageItems = [...SHOP_DATA.shoes.items];
      draftState.activeShopPageList = "shoes";
      break;
    case "JACKETS":
      draftState.activeShopPageItems = [...SHOP_DATA.jackets.items];
      draftState.activeShopPageList = "jackets";
      break;
    case "MENS":
      draftState.activeShopPageItems = [...SHOP_DATA.mens.items];
      draftState.activeShopPageList = "mens";
      break;
    case "WOMENS":
      draftState.activeShopPageItems = [...SHOP_DATA.womens.items];
      draftState.activeShopPageList = "womens";
      break;
    case "PANTS":
      draftState.activeShopPageItems = [...SHOP_DATA.pants.items];
      draftState.activeShopPageList = "pants";
      break;
    case "ALL":
      draftState.activeShopPageItems = [...SHOP_DATA.hats.items, ...SHOP_DATA.shoes.items, ...SHOP_DATA.jackets.items, ...SHOP_DATA.mens.items, ...SHOP_DATA.womens.items, ...SHOP_DATA.pants.items];
      draftState.activeShopPageList = "all";
    case "ADD_TO_CART":
      draftState.cart.push(action.value);
      draftState.numberOfItemsInCart = draftState.numberOfItemsInCart + 1;
  }
}

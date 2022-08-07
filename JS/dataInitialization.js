"use strict";

let imgSliderArr = [
  new Showcase(
    "summer sale",
    "https://ifg-marketing.imgix.net/surfdome/github/com/home/slider/large/20220726-com-l.jpg",
    1
  ),
  new Showcase(
    "New Arrivals",
    "https://ifg-marketing.imgix.net/surfdome/github/com/home/slider/large/20220131-gen-l.jpg",
    2
  ),
];

let deliveryInfoArr = [
  new DeliveryInfo("FREE UK STANDARD DELIVERY ON ORDERS OVER 30£", "truck", 1),
  new DeliveryInfo("FREE PAPERLESS RETURNS", "box-seam", 2),
  new DeliveryInfo("TRY BEFORE YOU BUY, WITH KLARNA", "sunglasses", 3),
];

let ShopCategoriesArr = [
  new ShopCategories("summerSurf", "Surfboards", "Wetsuits", "Accessories"),
  new ShopCategories("backToSchool", "shoes", "Backpacks", "Accessories"),
  new ShopCategories("flipFlops", "Men", "Women", "All"),
];

let brandsArr = [
  new Brands(
    "North Face logo",
    "https://static5-surfdome.imgix.net/github/com/brands/the_north_face.jpg"
  ),
  new Brands(
    "Billabong logo",
    "https://ifg-marketing.imgix.net/surfdome/github/com/brands/billabong-01.jpg"
  ),
  new Brands(
    "Volcom logo",
    "https://ifg-marketing.imgix.net/surfdome/github/com/brands/volcom2.jpg"
  ),
  new Brands(
    "Patagonia logo",
    "https://static5-surfdome.imgix.net/github/com/brands/patagonia.jpg"
  ),
  new Brands(
    "Vans logo",
    "https://static5-surfdome.imgix.net/github/com/brands/vans.jpg"
  ),
  new Brands(
    "Hurley logo",
    "https://static5-surfdome.imgix.net/github/com/brands/hurley.jpg"
  ),
];

let shopArr = [
  new Shop("Slowtide", "1"),
  new Shop("Campaing", "2"),
  new Shop("Poler", "3"),
];

let shopArr2 = [
  new Shop("UvProtection", "4"),
  new Shop("Carhartt", "5"),
  new Shop("NewArrivals", "6"),
];

let shopArr3 = [
  new Shop("OuterKnown", "7", "6"),
  new Shop("SustainableGear", "8", "6"),
];

let descArr = [
  new Desc(
    "#ENJOY THE RIDE",
    "Whether its a Cornish beach, a mountain slope in the Alps or a street spot in London - we feel your passion. Weve got your weekday commutes and weekend escapes covered. Well get you kitted out with the best action sports gear whether you are doing a road trip searching for the perfect wave, freeriding in the backcountry, learning new tricks at the snowdome or shredding your local skatepark. We are doing our best to protect our favourite places and get involved in protecting the environment. We are the natural shopping destination for you to get out there and enjoy the ride."
  ),
];

let subscribeArr = [
  new Subscribe(
    "SUBSCRIBE TO SURFDOME",
    "By entering your email address above you explicitly consent for us to hold your data in accordance with our Privacy Policy",
    "Reviews 85,872 ⬆ Excellent",
    "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
  ),
];

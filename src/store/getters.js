import MobileDetect   from 'mobile-detect'
const md = new MobileDetect(window.navigator.userAgent);

 export const isMobile = state => {
  return md.mobile() ? true : false
}

// export const agendaGroupList = state => {
//  return state.cart.added.map(({ id, quantity }) => {
//    const product = state.products.all.find(p => p.id === id)
//    return {
//      title: product.title,
//      price: product.price,
//      quantity
//    }
//  })
// }

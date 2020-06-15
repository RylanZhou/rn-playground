import PRODUCTS from '../../mock/data'

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((each) => each.ownerId === 'u1') // Products whose ownerId is current userId
}

export default (state = initialState, action) => {
  return state
}

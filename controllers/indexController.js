export const home = (req, res) => {
  res.render('index', {
    title: 'Home - Gefanssa',
    layout: 'layouts/main-layout'
  })
}

export const products = (req, res) => {
  res.render('products', {
    title: 'Products - Gefanssa',
    layout: 'layouts/main-layout'
  })
}

export default (home, products)
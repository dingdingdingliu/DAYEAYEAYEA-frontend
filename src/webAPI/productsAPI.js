const BASE_URL = 'https://api.coolizz.tw'

export const getAllProducts = async () => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products`)
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export const getCategoryProducts = async (category) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/category/${category}`)
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export const getAllProductsByPage = async (page) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/page/${page}`)
  } catch (e) {
    console.log(e)
  }
  return await res.json()
}

export const getCategoryProductsByPage = async (category, page) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/category/${category}/${page}`)
  } catch (e) {
    console.log(e)
  }
  return await res.json()
}

export const getProductById = async (id) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/${id}`)
  } catch (e) {
    console.log(e)
  }
  return await res.json()
}

export const getProductByArticle = async (articleSort, page) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/article/${articleSort}/${page}`)
  } catch (e) {
    console.log(e)
  }
  return await res.json()
}

export const getProductByKeywords = async (keywords) => {
  let res
  try {
    res = await fetch(`${BASE_URL}/products/${keywords}`)
  } catch (e) {
    console.log(e)
  }
  return await res.json()
}

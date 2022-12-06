// This function returns products with normal quality.

const getProductsOfNormalQuality = (pNormalQualityList) => {
  return pNormalQualityList.filter((item) => item.quality == "Normal")}

// This function returns products whose image

  const getProductImageWithPngExtension=(pImage)=>{
    return  pImage.filter((item)=> item.productImage.includes(".png"))
}

// This function returns the calorie of the

const getCalorieOfTheMostExpensiveProduct = (pCalorie) => {
         pCalorie.map((calorie) => calorie.price).sort((a, b) => b - a)[0];
  return pCalorie.filter((calorie) => calorie.totalCalori[0]);
};

// This function sorts the products according to their expiration date from smallest to largest.

const sortByExpirationDate= (pDate) => {
        pDate.sort((a,b)=>{
                return a.expireDate-b.expireDate
            })} ;

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};

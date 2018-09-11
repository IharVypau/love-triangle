/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let tempArr =[];
  
  preferences.forEach((val,i,arr)=>{
    if(tempArr.indexOf(val) === -1){
      let firstLove = arr[val - 1];
      let secondLove = arr[firstLove -1];
      let thirdLove = arr[secondLove - 1];
      if(thirdLove === val && firstLove !== secondLove && secondLove !== thirdLove && thirdLove !== firstLove) {
        tempArr.push(firstLove);
        tempArr.push(secondLove);
        tempArr.push(thirdLove);
      }
    }
  });
  return tempArr.length/3;
};

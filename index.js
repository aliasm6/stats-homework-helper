const boltArray = [0.968, 0.976, 0.986, 1, 1.006, 1.016, 1.028, 1, .972, 0.978, 0.987, 1.001, 1.007, 1.018, 1.032, 1.001, 0.98, 0.988, 1.002, 1.008, 1.020, 1.002, 0.982, 0.989, 1.003, 1.009, 1.022, 1.003, 0.984, 0.990, 1.004, 1.010, 1.024, 1.004, 0.991, 0.996, 1.011, 0.996, 0.992, 0.997, 1.012, 0.997, 0.993, 0.998, 1.013, 0.998, 0.994, 0.999, 1.014, 0.999]


const groupNums = (arrayData, dataMax, dataMin) => {
  let groupArray = [];
   for (i = 0; i < arrayData.length; i++) {
     if (arrayData[i] >= dataMin && arrayData[i] <= dataMax) {
       groupArray.push(arrayData[i]);
     }
   }
  let sumOfGroup = groupArray.reduce((a,b) => a + b, 0);

  console.log(groupArray, groupArray.length, sumOfGroup);
}

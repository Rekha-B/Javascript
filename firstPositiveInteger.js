// function firstPositiveInteger(nums){
//     let num=1;
//     while(true){
//         if(!nums.includes(num)){
//             return num;
//         }
//         num++;
//     }
// }

function firstPositiveInteger(nums){
    let n = nums.length;
    for(let i=0;i<n;i++){
        while(nums[i] > 0 && nums[i] <=n && nums[nums[i]-1] !== nums[i]){
            [nums[nums[i]-1], nums[i]] =   [ nums[i],nums[nums[i]-1]]
        }
    }

    for(let i=0;i<n;i++){
        if(nums[i] !== i+1){
             return i+1;
        }
    }
return n+1;

}
console.log(firstPositiveInteger([1,2,0]));
console.log(firstPositiveInteger([3,4,-1,1]));
console.log(firstPositiveInteger([7,8,9,11,12]));
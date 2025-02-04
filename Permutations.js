const permute = (nums) => {
    let res = []
    let arr = []

    const permutation = (nums) => {
        if(nums.length === 0){
            res.push(arr.slice())
        }
        for(let i = 0; i < nums.length; i++){
            nums.push(nums.shift())
            arr.push(nums[0])
            permutation(nums.slice(1))
        }
        arr.pop()
        return
    }

    permutation(nums)
    return res
}

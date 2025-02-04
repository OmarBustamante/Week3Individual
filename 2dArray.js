const findMatrix = (nums) => {
    let arr = [[]]
    nums.forEach(num => {
      pushNumber(0, arr, num)  
    })
}

const pushNumber = (index, arr, num) => {
    if(arr[index].length == 0){
        arr[index].push(num)
    } else{
        let dup = false
        for (let i = 0; i < arr[index].length; i++) {
            if(arr[index][i]===num){
                dup = true
                if(arr[index+1] == undefined){
                    arr.push([])
                    pushNumber(index+1, arr, num)
                } else{
                    pushNumber(index+1, arr, num)
                }
            }
        }
        if(dup===false){
            arr[index].push(num)
        }
    }
}
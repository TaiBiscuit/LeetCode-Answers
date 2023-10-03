
// 1- Two Sum

//Runtime: 85 ms, Memory Usage: 42.5 MB

const twoSum = function (nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let y=i+1; y<nums.length; y++){
            if(nums[i] + nums[y] == target){
                return [i, y]
            };
        };
    };
};



// 2- Palindrome Number

// Runtime: 146ms, Memory Usage:  50.71MB

const isPalindrome = function(x) {
    return x.toString().split('').reverse().join("") == x ? true : false;
};



// 13- Roman to Integer 

// Runtime:  84ms, Memory Usage:  46.08MB

var romanToInt = function(s) { 
    let finalNum = 0;
    const Dictionary = {
        I : 1,
        V : 5,
        X : 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for(let i=0; i < s.length; i++){
        let current = s[i];
        let next = s[i + 1];

        if(Dictionary[current] < Dictionary[next]) {
            finalNum -= Dictionary[current]
        } else { 
            finalNum += Dictionary[current]
        }
    }
    return finalNum
};



// 14- Longest Common Prefix

// Runtime:  ms, Memory Usage:  MB
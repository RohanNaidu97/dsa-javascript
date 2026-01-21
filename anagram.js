class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const sorted = str.split("").sort().join("");
        const sorted = s.split("").sort().join("");
        const secSorted = t.split("").sort().join("");

        if(sorted === secSorted)
            return true;
        else
            return false;
    }

    isAnagram(s, t) {
        // const sorted = str.split("").sort().join("");
        const sorted = s.split("").sort().join("");
        const secSorted = t.split("").sort().join("");

        if(sorted === secSorted)
            return true;
        else
            return false;
    }
}


// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.



//This function is for helping me create flashy text for the project

function spanifyText(string, substringSize = 1 ){
  let substrings = [];
  let spanNum = 1;
  for (let i = 0; i < string.length; i += substringSize)
    {  console.log(string.slice(i, substringSize));
       substrings.push( `<spanclass=\"${spanNum}th-span\">` + string.slice(i, substringSize + i) + "</span>" )
       spanNum += 1;
    }
  return substrings;
}
// 0 1 2 3 4 5
//length is 2
//"s t r i n g"
//I starts out at 0. grabs 0 and 1
//at first iteration, it goes up to 2.
//should grab 2 and 3 and repeat
//need to chop off uneven end and push it last
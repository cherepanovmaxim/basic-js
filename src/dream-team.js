
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  
  
  let final = ''

let array =[]; 
for (let i=0; i<members.length; i++) {
  
  
  
  if(  typeof(members[i]) === 'string' ) {


  array.push(members[i].toUpperCase())





  }

  
  
}



    for(let i = 0; i<array.length; i++) {


      final+= array.sort()[i].charAt(0)
    }

return final;
  
};

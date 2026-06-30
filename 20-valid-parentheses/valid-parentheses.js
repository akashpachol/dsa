/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[]
    for(let i=0;i<s.length;i++){
             const data=s.charAt(i)
             switch(data){
                case "{":
                stack.push("}")
                break;
                    case "[":
                stack.push("]")
                break;    case "(":
                stack.push(")")
                break;
                default:
                if(data!=stack.pop())
                return false
             }
    }
                 return stack.length===0

};
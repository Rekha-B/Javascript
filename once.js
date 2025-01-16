export default function once(func) {
    let ranOnce = false;
    let value;
    return function(...args){
      if(!ranOnce){
        value = func(...args);
        ranOnce = true;
      }
      return value;
    }
}
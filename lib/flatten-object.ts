/**
 * @param ob Object                 The object to flatten
 * @param prefix String (Optional)  The prefix to add before each key, also used for recursion
 **/
export function flattenObject(ob: any, prefix?: string, result: any = {}) {
    result = result || {};
  
    // Preserve empty objects and arrays, they are lost otherwise
    if (prefix && typeof ob === 'object' && ob !== null && Object.keys(ob).length === 0) {
      result[prefix] = Array.isArray(ob) ? [] : {};
      return result;
    }
  
    prefix = prefix ? prefix + '.' : '';
  
    for (const i in ob) {
      if (Object.prototype.hasOwnProperty.call(ob, i)) {
        // Only recurse on true objects and arrays, ignore custom classes like dates
        if (typeof ob[i] === 'object' && (Array.isArray(ob[i]) || Object.prototype.toString.call(ob[i]) === '[object Object]') && ob[i] !== null) {
          // Recursion on deeper objects
          flattenObject(ob[i], prefix + i, result);
        } else {
          result[prefix + i] = ob[i];
        }
      }
    }
    return result;
  }
  
  /**
   * Bonus function to unflatten an object
   *
   * @param ob Object     The object to unflatten
   */
  export function unflattenObject(ob: any) {
    const result: any = {};
    for (const i in ob) {
      if (Object.prototype.hasOwnProperty.call(ob, i)) {
        const keys = i.match(/(?:^\.+)?(?:\.{2,}|[^.])+(?:\.+$)?/g); // Just a complicated regex to only match a single dot in the middle of the string
        keys?.reduce((r, e, j) => {
          return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 === j ? ob[i] : {}) : []);
        }, result);
      }
    }
    return result;
  }

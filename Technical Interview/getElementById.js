console.dir(document);  
// go trhough document, check each node
// this  === document to start
// if we dont find id, call on next child element
// assume HTML Elements
// recursion
// not keep using document

// base case: child element not null
// if no children, return out of that tree
// if children, check id property
// found? -> return this Element
// not found? -> recurse wuth nex child
// never found -> never return

Document.prototype.myGetElementById = function(id) {
  for (const element of this.children) {
    if (element.id === id) return element;
    const found = Document.prototype.myGetElementById.call(element, id);
    if (found) return found;
  }
  return null
}

// Call this on the dom in thr browser console
// document.myGetElementById("root")
// document.myGetElementById("content")
// document.myGetElementById("div")
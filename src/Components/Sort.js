
const Sort = (data, bySort, name) => { 
    
    let item = data.sort(function(item1, item2) {
        const value1 = item1[name];
        const value2 = item2[name];
        if (value1 > value2) return bySort ? 1 : -1;
        if (value1 < value2) return bySort ? -1 : 1;
        return 0;
      });
    return item    
    
     
}

export default Sort



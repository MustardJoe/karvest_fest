class SimpleDB {
  constructor() {
    // console.log(`
    //   ==================================================
    //   Welcome to simpleDB:
    //   `);
    this.currenDataObj = {};
    this.dataBackUpsArr = [];
    this.haveWeStarted = false;
  }

  set(dataKey, dataValue) {
    this.currenDataObj[dataKey] = dataValue;
    if(this.haveWeStarted === true) {
      this.dataBackUpsArr.push({...this.currenDataObj});
    }
  }

  get(entry) {
    return this.currenDataObj[entry];
  }

  getAllCurrent() {
    return this.currenDataObj;
  }

  seeBackups() {
    console.log(`
        Viewing dataBackUpsArr:
    `);
    return this.dataBackUpsArr;
  }

  del(entry) {
    console.log('entry will be balleted later');
    delete this.currenDataObj.entry;
    console.log(`
        remaining data looks like:
    `);
    return this.currenDataObj;
  }

  begin() {
    this.haveWeStarted = true;
    this.dataBackUpsArr.push({ ...this.currenDataObj });
    console.log(`
                 Begining Logging Process: ...ok
                 Printing Recpeipt, dataBackUpsArr current:`,
                 this.dataBackUpsArr
    );
  }

  commit() {
    if(this.dataBackUpsArr.length > 0) {
      this.dataBackUpsArr = [];
      console.log(`

      `)
    }
  }
  
  rollback() {
    if(this.dataBackUpsArr.length > 0) {
      this.currenDataObj = this.dataBackUpsArr.pop();
      return this.currenDataObj;
    }
    else {
      console.log(`
      ERR: no previous state to rollback to
      `);
    }
    
  }

  // calcArea() {
  //   return 'area of yer butt';
  // }
}

export default SimpleDB;

// let db = new simpleDB();
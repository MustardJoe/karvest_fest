const simpleDB = {
  set(key, value) {
    
    simpleDB.ourDB[key] = value;
    if(simpleDB.haveWeStarted === true) {
      simpleDB.ourBackup.push({ ...simpleDB.ourDB });
    }
  },

  get(entry) {
    // console.log(`{ ${entry}: ${simpleDB.ourDB[entry]} }`)
    return { entry: simpleDB.ourDB[entry] };
  },

  del() {
    //oops, forgot this one.
  },

  begin() {
    simpleDB.haveWeStarted = true;
    simpleDB.ourBackup.push({ ...simpleDB.ourDB });
    console.log('-----------in begin----------------');
    console.log('current data', simpleDB.ourDB);
    console.log('backup', simpleDB.ourBackup);
  },

  commit() {
    if(simpleDB.ourBackup.length > 0) {
      simpleDB.ourBackup = [];
    }
    else {
      console.log('party time in commit-land');
    }
  },

  rollback() {
    console.log('in rollback, testing if condition', simpleDB.ourBackup.length > 0)
    if(simpleDB.ourBackup.length > 0) {
      console.log('Backup looks like:', simpleDB.ourBackup)
      simpleDB.ourDB = simpleDB.ourBackup.pop();

      console.log(simpleDB.ourDB);
    }
    else {
      console.log('unable to rollback - no previous data to rollback to');
    }
  },

  ourDB: {},
  ourBackup: [],
  haveWeStarted: false,
}
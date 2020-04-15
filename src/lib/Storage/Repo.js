import crypto from "crypto";

class Repo {
  constructor(keyName) {
    console.log("keyname", keyName);
    this.keyName = keyName;

    if (!localStorage.getItem(keyName)) {
      localStorage.setItem(keyName, JSON.stringify([]));
    }
  }

  async create(attrs) {
    const newRecord = attrs;
    newRecord.id = this.randomId();
    const records = this.getAll();
    records.push(newRecord);
    await this.writeAll(records);
    return newRecord;
  }
  getAll() {
    return JSON.parse(localStorage.getItem(this.keyName)) || [];
  }
  async writeAll(records) {
    console.log("writing", this.keyName);
    await localStorage.setItem(this.keyName, JSON.stringify(records));
  }
  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }
  async getOneBy(attrs) {
    const records = await this.getAll();
    return records.find((record) => {
      let found = false;

      for (let key in attrs) {
        if (record[key] !== attrs[key]) {
          return false;
        }
        found = true;
      }
      return found;
    });
  }

  async delete(id) {
    const records = await this.getAll();
    const newRecords = records.filter((record) => record.id !== id);
    await this.writeAll(newRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    Object.assign(record, attrs);
    console.log("record in update", record.history);
    await this.writeAll(records);
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }
}

export default Repo;

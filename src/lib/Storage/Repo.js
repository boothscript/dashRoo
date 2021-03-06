import crypto from 'crypto';
import moment from 'moment';

class Repo {
  constructor(keyName) {
    this.keyName = keyName;

    if (!localStorage.getItem(keyName)) {
      localStorage.setItem(keyName, JSON.stringify([]));
    }
  }

  create(attrs) {
    const newRecord = attrs;
    newRecord.id = this.randomId();
    const records = this.getAll();
    records.push(newRecord);
    this.writeAll(records);
    return newRecord;
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.keyName)) || [];
  }

  writeAll(records) {
    localStorage.setItem(this.keyName, JSON.stringify(records));
  }

  getOne(id) {
    const records = this.getAll();
    return records.find((record) => record.id === id);
  }

  getOneBy(attrs) {
    const records = this.getAll();
    return records.find((record) =>
      Object.keys(attrs).every((key) => record.key === attrs[key])
    );
  }

  delete(id) {
    const records = this.getAll();
    const newRecords = records.filter((record) => record.id !== id);
    this.writeAll(newRecords);
  }

  update(id, attrs) {
    const records = this.getAll();
    const record = records.find((item) => item.id === id);
    Object.assign(record, attrs);

    this.writeAll(records);
  }

  // eslint-disable-next-line class-methods-use-this
  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }

  updateStored(date, data) {
    const records = this.getAll();
    if (!records) {
      this.create({ date, ...data });
    } else {
      const record = records.find((item) =>
        moment(item.date).isSame(date.format(), 'day')
      );
      if (record) {
        this.update(record.id, { data: data.data });
      } else {
        this.create({ ...data, date: date.format() });
      }
    }
  }

  getTodaysState(date) {
    const records = this.getAll();
    if (!records) {
      return null;
    }
    const record = records.find((item) =>
      moment(item.date).isSame(date.format(), 'day')
    );
    return record;
  }
}

export default Repo;

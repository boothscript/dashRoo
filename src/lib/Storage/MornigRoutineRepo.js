import Repo from "./Repo";
import { compareDates } from "../utils/date";

class MorningRoutineRepo extends Repo {
  async updateData(date, data) {
    console.log("running update", date, data);
    const records = await this.getAll();
    if (!records) {
      this.create({ date, ...data });
    } else {
      console.log("records", records);
      const record = records.find((record) =>
        compareDates(new Date(record.date), date)
      );
      if (record) {
        this.update(record.id, { ...data });
      } else {
        this.create({ date, ...data });
      }
    }
  }
}

export default new MorningRoutineRepo("morningRoutine");

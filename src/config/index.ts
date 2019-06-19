import { constants } from "../common";
import * as mongoose from "mongoose";
export const connectDatabase = () => {
  const url = `mongodb://localhost:27017/${constants.DATABASENAME}`;
  mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log(`Database is connected ...`))
    .catch(error => console.log(error));
};

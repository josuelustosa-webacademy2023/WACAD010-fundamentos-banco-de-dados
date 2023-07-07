import connection from "./db/config";
import { Api } from "./server";

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    new Api().server.listen(3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
void start();

import { Api } from "./server";
import connection from "./db/config";

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    new Api().server.listen(3001, () => {
      console.log("Server started on po rt 3001");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();

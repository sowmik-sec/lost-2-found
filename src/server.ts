import { app } from "./app";
import config from "./config";

const port = config.port;
app.listen(port, () => {
  console.log(`Lost 2 found is listening to port ${port}`);
});

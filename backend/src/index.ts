import app from "./app";
import env from "./config/environment.config";


const PORT = env.app.port

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

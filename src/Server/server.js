import express from 'express'
import router from './routes/index'

const port = process.env.PORT || 3001;

const app = express();

app.use('/api/items', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

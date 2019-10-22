// eslint-disable-next-line import/no-extraneous-dependencies
import { Photon } from '@generated/photon';
import serverless from 'serverless-http';
import { json } from 'body-parser';
import express from 'express';

const photon = new Photon();
const app = express();

app.use(json());

app.get(`/items`, async (req, res) => {
  const results = await photon.items.findMany();
  res.json(results);
});

app.get(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  const item = await photon.items.findOne({
    where: {
      id
    }
  });
  res.json(item);
});

module.exports.handler = serverless(app);

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from 'state-api';
import config from 'config';
import App from 'components/App';

const serverRender = async () => {
  const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(rawData.data);
  const initialData = { ...api.getState() };

  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
    initialData,
  };
};

export default serverRender;

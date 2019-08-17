import moment from 'moment';
import * as JsSearch from 'js-search';

const Utils = {
  uniqid() {
    return Math.random().toString(36).substring(2, 15).slice(0, 10);
  },

  getDate() {
    return new Date().toISOString().slice(0, 10).trim();
  },

  formatTime(time, format = 'LT') {
    const m = moment(time, 'h:mm:ss a');
    const newTime = m.format(format);
    return newTime.match('Invalid') ? time : newTime;
  },

  getTime() {
    return new Date().toTimeString().slice(0, 8).trim();
  },

  isEmpty(value) {
    switch (typeof value) {
    case 'object':
      if (value === null) {
        return true;
      } if (Array.isArray(value)) {
        return !value.length;
      }
      return !Object.keys(value).length;
    case 'number':
      return false;
    default:
      return value === null || value === undefined || value === '';
    }
  },

  kebabToCamel(string) {
    return string.replace(/-([a-z])/g, g => g[1].toUpperCase());
  },

  escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },

  timestamp() {
    return Math.floor(Date.now() / 1000);
  },

  currencyFormat(val, format = 'en-IN', withDecimal = true) {
    let number = Number(val);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(number)) {
      number = 0;
    }

    return new Intl.NumberFormat(format, {
      minimumFractionDigits: withDecimal || number < 999 ? 2 : 0,
    }).format(number);
  },

  quickSearch(records, keyword = '', searchable = []) {
    return new Promise((resolve, reject) => {
      try {
        if (!Utils.isEmpty(records) && keyword && !Utils.isEmpty(searchable)) {
          // init search-js
          const search = new JsSearch.Search('id');
          search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
          search.addDocuments(records);
          searchable.forEach((field) => {
            search.addIndex(field.toLowerCase());
          });
          return resolve(search.search(keyword));
        }
        return reject((new Error('All parameters are compulsory.')).message);
      } catch (e) {
        return reject(e.message);
      }
    });
  },

  convertFileToText(file) {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.addEventListener(
        'load',
        ({ target }) => {
          resolve(target.result);
        },
        { once: true },
      );
      fileReader.readAsText(file);
    });
  },

  asyncTimer(wait) {
    return args => new Promise((resolve) => {
      setTimeout(() => resolve(args), wait);
    });
  },

  parseJson(json) {
    try {
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  },

  stringifyJson(value, space) {
    try {
      return JSON.stringify(value, null, space);
    } catch (e) {
      return false;
    }
  },

  getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  },

  textToHtml(text) {
    const div = document.createElement('div');
    div.innerHTML = text.trim();
    return div.firstChild;
  },

  exportFile(fileName, content) {
    const download = Utils.textToHtml(
      `<a href="data:text/csv;charset=utf-8,${encodeURIComponent(
        content,
      )}" download="${fileName}" style="display: none"></a>`,
    );
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  },

  getImageDataUrl(file) {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        res(e.target.result);
      });
      reader.readAsDataURL(file);
    });
  },
};

export default Utils;

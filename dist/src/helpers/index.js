"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const xml2json = require("xml2json");
var Helpers;
(function (Helpers) {
    function onlyDate(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    Helpers.onlyDate = onlyDate;
    function compareOnlyDates(date1, date2) {
        return onlyDate(date1).getTime() === onlyDate(date2).getTime();
    }
    Helpers.compareOnlyDates = compareOnlyDates;
    function makeRequest(options) {
        return new Promise((resolve, reject) => {
            request(options, (error, response, data) => {
                if (error || response.statusCode !== 200) {
                    reject(error);
                }
                resolve(data);
            });
        });
    }
    Helpers.makeRequest = makeRequest;
    function convertXmlToJsonString(rawXML) {
        return xml2json.toJson(rawXML);
    }
    Helpers.convertXmlToJsonString = convertXmlToJsonString;
    function parse(data) {
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    Helpers.parse = parse;
})(Helpers = exports.Helpers || (exports.Helpers = {}));
//# sourceMappingURL=index.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../messages");
class NotConfigured {
    constructor() {
        this.id = 'NOT_CONFIGURED';
        this.triggeredBy = ['NOT_CONFIGURED'];
        this.create = () => __awaiter(this, void 0, void 0, function* () {
            return new messages_1.TextMessage('Nie należysz jeszcze do żadnej grupy. Kliknij w poniższy przycisk, aby to dodać. ;)', [new messages_1.QuickReply('Skonfiguruj')]);
        });
    }
}
exports.NotConfigured = NotConfigured;
//# sourceMappingURL=NotConfigured.js.map
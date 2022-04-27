"use strict";
/**
 * 京东-锦鲤红包
 * 6点后做全部CK
 * cron: 2 0,1,6 * * *
 * CK1     HW.ts -> 内部
 * CK2～n  内部   -> HW.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var sendNotify_1 = require("./sendNotify");
var dotenv = require("dotenv");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var rabbitToken = process.env.RABBIT_TOKEN || '', tg_id = process.env.TG_ID || '';
var cookie, cookiesArr = [], res, UserName;
var ua = "Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1";
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.03, 0.12, 0.3, 0.4, 0.6, 0.7, 0.8, 1, 1.2, 2, 3.6], log;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dotenv.config();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _a.sent();
                cookiesArr = cookiesArr.slice(0, 1);
                return [4 /*yield*/, join()];
            case 2:
                _a.sent();
                return [4 /*yield*/, help()];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 4:
                cookiesArr = _a.sent();
                cookiesArr = cookiesArr.slice(0, 9);
                if (!(new Date().getHours() !== 6)) return [3 /*break*/, 6];
                return [4 /*yield*/, join()];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [4 /*yield*/, getShareCodeSelf()];
            case 7:
                _a.sent();
                return [4 /*yield*/, help()];
            case 8:
                _a.sent();
                return [4 /*yield*/, open(0)];
            case 9:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, i, e_1, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 15];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 11, , 12]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    i = 0;
                    _c.label = 3;
                case 3:
                    if (!(i < 3)) return [3 /*break*/, 10];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 7, , 9]);
                    return [4 /*yield*/, getLog()];
                case 5:
                    log = _c.sent();
                    return [4 /*yield*/, api('h5launch', { followShop: 0, random: log.match(/"random":"(\d+)"/)[1], log: log.match(/"log":"(.*)"/)[1], sceneid: 'JLHBhPageh5' })];
                case 6:
                    res = _c.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    if (res.rtn_code !== 403) {
                        return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 9];
                case 7:
                    e_1 = _c.sent();
                    console.log('log error', e_1);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 8:
                    _c.sent();
                    return [3 /*break*/, 9];
                case 9:
                    i++;
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 12];
                case 11:
                    e_2 = _c.sent();
                    console.log(e_2);
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 13:
                    _c.sent();
                    _c.label = 14;
                case 14:
                    _i++;
                    return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
}
function getShareCodeSelf(one) {
    var _a, _b, _c;
    if (one === void 0) { one = false; }
    return __awaiter(this, void 0, void 0, function () {
        var _i, _d, _e, index, value, e_3;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (!one) return [3 /*break*/, 2];
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 1:
                    res = _f.sent();
                    return [2 /*return*/, (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.redpacketInfo) === null || _c === void 0 ? void 0 : _c.id];
                case 2:
                    _i = 0, _d = cookiesArr.entries();
                    _f.label = 3;
                case 3:
                    if (!(_i < _d.length)) return [3 /*break*/, 10];
                    _e = _d[_i], index = _e[0], value = _e[1];
                    _f.label = 4;
                case 4:
                    _f.trys.push([4, 6, , 7]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 5:
                    res = _f.sent();
                    console.log('ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [3 /*break*/, 7];
                case 6:
                    e_3 = _f.sent();
                    console.log('getShareCodeSelf error', e_3);
                    return [3 /*break*/, 7];
                case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 8:
                    _f.sent();
                    _f.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    _f.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
function open(autoOpen) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, j, _c, _d, t, _e, _f, t, e_4;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _g.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 19];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 15, , 16]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    j = 1;
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 3:
                    res = _g.sent();
                    for (_c = 0, _d = res.data.result.redpacketConfigFillRewardInfo; _c < _d.length; _c++) {
                        t = _d[_c];
                        if (t.packetStatus === 1) {
                            console.log("".concat(j, " \u53EF\u62C6"));
                        }
                        else if (t.packetStatus === 2) {
                            console.log("".concat(j, " \u5DF2\u62C6"));
                        }
                        j++;
                    }
                    console.log('');
                    j = 1;
                    _e = 0, _f = res.data.result.redpacketConfigFillRewardInfo;
                    _g.label = 4;
                case 4:
                    if (!(_e < _f.length)) return [3 /*break*/, 14];
                    t = _f[_e];
                    if (!(t.packetStatus === 1)) return [3 /*break*/, 11];
                    if (!autoOpen) return [3 /*break*/, 10];
                    return [4 /*yield*/, getLog()];
                case 5:
                    log = _g.sent();
                    return [4 /*yield*/, api('h5receiveRedpacketAll', { random: log.match(/"random":"(\d+)"/)[1], log: log.match(/"log":"(.*)"/)[1], sceneid: 'JLHBhPageh5' })];
                case 6:
                    res = _g.sent();
                    console.log('打开成功', parseFloat(res.data.result.discount));
                    if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 7:
                    _g.sent();
                    _g.label = 8;
                case 8: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
                case 9:
                    _g.sent();
                    _g.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (![1, 2].includes(t.packetStatus)) {
                        console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                    }
                    _g.label = 12;
                case 12:
                    j++;
                    _g.label = 13;
                case 13:
                    _e++;
                    return [3 /*break*/, 4];
                case 14: return [3 /*break*/, 16];
                case 15:
                    e_4 = _g.sent();
                    console.log(e_4);
                    return [3 /*break*/, 16];
                case 16: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 17:
                    _g.sent();
                    _g.label = 18;
                case 18:
                    _i++;
                    return [3 /*break*/, 1];
                case 19: return [2 /*return*/];
            }
        });
    });
}
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, me, remain, _c, shareCodes_1, code, success, i, e_5;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 24];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 20, , 21]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _d.sent();
                    _d.label = 4;
                case 4:
                    if (index === 0) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                    }
                    return [4 /*yield*/, getShareCodeSelf(true)];
                case 5:
                    me = _d.sent(), remain = true;
                    _c = 0, shareCodes_1 = shareCodes;
                    _d.label = 6;
                case 6:
                    if (!(_c < shareCodes_1.length)) return [3 /*break*/, 19];
                    code = shareCodes_1[_c];
                    if (!remain)
                        return [3 /*break*/, 19];
                    success = false;
                    if (!(!fullCode.includes(code) && code !== me)) return [3 /*break*/, 18];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    i = 0;
                    _d.label = 7;
                case 7:
                    if (!(i < 5)) return [3 /*break*/, 18];
                    if (success)
                        return [3 /*break*/, 18];
                    return [4 /*yield*/, getLog()];
                case 8:
                    log = _d.sent();
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, random: log.match(/"random":"(\d+)"/)[1], log: log.match(/"log":"(.*)"/)[1], sceneid: 'JLHBhPageh5' })];
                case 9:
                    res = _d.sent();
                    if (!(res.rtn_code === 403)) return [3 /*break*/, 11];
                    console.log('log error');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 10:
                    _d.sent();
                    return [3 /*break*/, 17];
                case 11:
                    success = true;
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 13];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 12:
                    _d.sent();
                    remain = false;
                    return [3 /*break*/, 18];
                case 13:
                    if (!(res.data.result.status === 3)) return [3 /*break*/, 15];
                    console.log('今日助力次数已满');
                    remain = false;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 14:
                    _d.sent();
                    return [3 /*break*/, 18];
                case 15:
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 16:
                    _d.sent();
                    _d.label = 17;
                case 17:
                    i++;
                    return [3 /*break*/, 7];
                case 18:
                    _c++;
                    return [3 /*break*/, 6];
                case 19: return [3 /*break*/, 21];
                case 20:
                    e_5 = _d.sent();
                    console.log(e_5);
                    return [3 /*break*/, 21];
                case 21: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
                case 22:
                    _d.sent();
                    _d.label = 23;
                case 23:
                    _i++;
                    return [3 /*break*/, 1];
                case 24: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&clientVersion=10.2.4&osVersion=AndroidOS&d_brand=Xiaomi&d_model=Xiaomi"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        "origin": "https://h5.m.jd.com",
                        "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                        'Content-Type': 'application/x-www-form-urlencoded',
                        "X-Requested-With": "com.jingdong.app.mall",
                        "User-Agent": ua,
                        "Cookie": cookie
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        var data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!rabbitToken && !tg_id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb")];
                case 1:
                    data = _a.sent();
                    if (data !== 1 && data !== '1') {
                        return [2 /*return*/, data];
                    }
                    else {
                        console.log('No log');
                        process.exit(0);
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("http://www.madrabbit.cf:8080/license/log?tg_id=".concat(tg_id, "&token=").concat(rabbitToken))];
                case 3:
                    data = (_a.sent()).data;
                    return [2 /*return*/, "'\"random\":\"".concat(data.random, "\",\"log\":\"").concat(data.log, "\"'")];
                case 4: return [2 /*return*/];
            }
        });
    });
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    let cfg = app.config['pluginName'];
    return async (ctx, next) => {
        await next();
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
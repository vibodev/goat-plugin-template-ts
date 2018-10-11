
export default function (app: any) {
  let cfg = app.config['pluginName']
  return async (ctx: any, next: any) => {
    await next()
  }
}

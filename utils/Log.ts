class Log {
  public static log(message: string = "", type: string = "default") {
    const hookColor = "#22f7e5";
    const onHookColor = "#000";
    const methodColor = "#f7e522";
    const onMethodColor = "#000";
    const defaultColor = "#fff";
    const onDefaultColor = "#000";
    const stateColor = "#fc0";
    const onStateColor = "#222";
    const propsColor = "#ccc";
    const onPropsColor = "#222";

    const style = {
      default: `background:${stateColor};color:${onStateColor};`,
      state: `background:${stateColor};color:${onStateColor};`,
      props: `background:${propsColor};color:${onPropsColor};`,
      hook: `background:${hookColor};color:${onHookColor};`,
      method: `background:${methodColor};color:${onMethodColor};`,
    };

    console.log(`%c ${message}`, style[type]);
  }
}

const log = Log.log;

export { log };

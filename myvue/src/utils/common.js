/**
 * @desc 函数防抖
 * @param func 函数
 * @param delay 延迟执行毫秒数
 */
export const Debounce = (func, delay = 500) => {
  let timer;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args);
    }, delay);
  };
};

/**
 * @desc 函数节流
 * @param func 函数
 * @param interval 延迟执行毫秒数
 */
export const Throttle = (func, interval = 500) => {
  let last;
  let timer;
  return function () {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        func.apply(this, args);
      }, interval);
    } else {
      last = now;
      func.apply(this, args);
    }
  };
};





export const addEvent = (function () {

  return function (
    element: any,
    event: string,
    handler: EventListener | EventListenerObject | Function,
    options?: boolean | AddEventListenerOptions
  ) {
    element && element.addEventListener(event, handler, options || false);
  };
})();

export const removeEvent = (function () {

  return function (
    element: any,
    event: string,
    handler: EventListener | EventListenerObject | Function,
    options?: boolean | AddEventListenerOptions
  ) {
    element && element.removeEventListener(event, handler, options || false);
  };
})();






export const isScrollElement = (element: HTMLElement) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};




/**
 * 从当前节点向上查找所有的滚动元素
 */
export const getScrollElements = (
  container: HTMLElement,
  top: HTMLElement = document.documentElement
  ): HTMLElement[] => {
  const scrollElements: HTMLElement[] = [];
  let element: HTMLElement | null = container;
  while (element && element !== top) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = element.parentElement;
  }
  return scrollElements;
};

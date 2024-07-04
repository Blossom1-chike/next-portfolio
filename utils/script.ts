//initialize throttleTimer as false
let throttleTimer = false;

const elementInView = (el: Element, dividend: number = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el: Element) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

export const displayScrollElement = (el: Element) => {
  console.log("display", el);
  el.classList.add("scrolled");
};

export const hideScrollElement = (el: Element) => {
  el.classList.remove("scrolled");
};

export const throttle = (
  callback: (_elements: NodeListOf<Element>) => void,
  time: number,
  elements: NodeListOf<Element>
) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;

  //first set throttle timer to true so the function doesn't run
  throttleTimer = true;

  setTimeout(() => {
    //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
    callback(elements);
    throttleTimer = false;
  }, time);
};

export const handleScrollAnimation = (elements: NodeListOf<Element>) => {
  elements.forEach((el: Element) => {
    console.log(el);
    if (elementInView(el, 2)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

import LoadingMask from "./components/LoadingMask";

LoadingMask.install = (Vue) => {
    const node = document.createElement('div')
    document.body.appendChild(node);
    const ldm = new (Vue.extend(LoadingMask))
    ldm.$mount(node)
    Vue.prototype.$loadingmask = ldm
};

export default LoadingMask;

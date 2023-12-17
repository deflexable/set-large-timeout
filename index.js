
const MAX_32_BITS = 0x7FFFFFFF;
const setLargeTimeout = (func, ms) => {
    let cleanup;

    if (ms >= MAX_32_BITS) {
        const t = setTimeout(() => {
            cleanup = setLargeTimeout(func, ms - MAX_32_BITS);
        }, MAX_32_BITS);
        cleanup = () => {
            clearTimeout(t);
        }
    } else {
        const t = setTimeout(func, ms);
        cleanup = () => {
            clearTimeout(t);
        }
    }

    return () => {
        cleanup();
    }
}

module.exports = setLargeTimeout;
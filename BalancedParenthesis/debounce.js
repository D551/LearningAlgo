const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const setSearchTextDisptach = useCallback(
    debounce((event) => {
        getSearchText(event.target.value.trim().toLowerCase());
    }, 1500),
    [],
);
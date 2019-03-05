/**
 * @name get_parameters
 * @desc Returns the parsed get parameters from the url, assuming they are correctly formatted, without any url
 *       decoding. If multiple get parameters have the same value, only the last value is taken into account.
 * @return An object
 */
export const get_parameters = () => (
    parse_parameters(window.location.search.substr(1))
);

export const parse_parameters = (params) => {
    let res = {};
    params
        .split('&')
        .filter(e => e)
        .forEach(
            (item) => (res[item.split('=')[0]] = item.split('=')[1])
        );
    return res;
};
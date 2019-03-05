/**
 * @name get_parameters
 * @desc Returns the parsed get parameters from the url, assuming they are correctly formatted, without any url
 *       decoding. If multiple get parameters have the same value, only the last value is taken into account.
 * @return An object
 */
export const get_parameters = () => {
    let res = {};
    window.location.search
        .substr(1)
        .split('&')
        .forEach((
            item) => (res[item.split('=')[0]] = item.split('=')[1])
        );
    return res;
};
import {parse_parameters} from "../../src/utils/url";

test('parse_parameters empty', () => {
    expect(parse_parameters('')).toEqual({});
});

test('parse_parameters one parameter', () => {
    expect(parse_parameters('a=1')).toEqual({a: "1"});
});

test('parse_parameters two parameters', () => {
    expect(parse_parameters('a=1&b=2')).toEqual({a: "1", b: "2"});
});

test('parse_parameters parameter overriding', () => {
    expect(parse_parameters('a=1&a=2')).toEqual({a:"2"});
});

test('parse_parameters no url decoding', () => {
    expect(parse_parameters('a=%20')).toEqual({a:"%20"});
});
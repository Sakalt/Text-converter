const armenianMap = {
    'a': 'ա', 'b': 'բ', 'c': 'ց', 'd': 'դ', 'e': 'ե', 'f': 'ֆ', 'g': 'գ',
    'h': 'հ', 'i': 'ի', 'j': 'ջ', 'k': 'կ', 'l': 'լ', 'm': 'մ', 'n': 'ն',
    'o': 'օ', 'p': 'պ', 'q': 'ք', 'r': 'ռ', 's': 'ս', 't': 'տ', 'u': 'ու',
    'v': 'վ', 'w': 'վ', 'x': 'խ', 'y': 'յ', 'z': 'զ', ' ': ' ', ',': ',', '.': '.'
};

const georgianMap = {
    'a': 'ა', 'b': 'ბ', 'c': 'ც', 'd': 'დ', 'e': 'ე', 'f': 'ფ', 'g': 'გ',
    'h': 'ჰ', 'i': 'ი', 'j': 'ჯ', 'k': 'კ', 'l': 'ლ', 'm': 'მ', 'n': 'ნ',
    'o': 'ო', 'p': 'პ', 'q': 'ქ', 'r': 'რ', 's': 'ს', 't': 'ტ', 'u': 'უ',
    'v': 'ვ', 'w': 'ვ', 'x': 'ხ', 'y': 'ყ', 'z': 'ზ', ' ': ' ', ',': ',', '.': '.'
};

const burmeseMap = {
    'a': 'က', 'b': 'ခ', 'c': 'စ', 'd': 'ဒ', 'e': 'ဧ', 'f': 'ဖ', 'g': 'ဂ',
    'h': 'ဟ', 'i': 'ဣ', 'j': 'ဇ', 'k': 'က', 'l': 'လ', 'm': 'မ', 'n': 'န',
    'o': 'ဩ', 'p': 'ပ', 'q': 'ဖ', 'r': 'ရ', 's': 'စ', 't': 'တ', 'u': 'ဥ',
    'v': 'ဗ', 'w': 'ဝ', 'x': 'ဇ', 'y': 'ယ', 'z': 'ဇ', ' ': ' ', ',': ',', '.': '.'
};

const thaiMap = {
    'a': 'ก', 'b': 'ข', 'c': 'จ', 'd': 'ด', 'e': 'เ', 'f': 'ฟ', 'g': 'ก',
    'h': 'ห', 'i': 'ิ', 'j': 'จ', 'k': 'ค', 'l': 'ล', 'm': 'ม', 'n': 'น',
    'o': 'โ', 'p': 'ป', 'q': 'ค', 'r': 'ร', 's': 'ส', 't': 'ต', 'u': 'ุ',
    'v': 'ว', 'w': 'ว', 'x': 'ซ', 'y': 'ย', 'z': 'ซ', ' ': ' ', ',': ',', '.': '.'
};

const persianMap = {
    'a': 'ا', 'b': 'ب', 'c': 'ج', 'd': 'د', 'e': 'ه', 'f': 'ف', 'g': 'گ',
    'h': 'ه', 'i': 'ی', 'j': 'ج', 'k': 'ک', 'l': 'ل', 'm': 'م', 'n': 'ن',
    'o': 'و', 'p': 'پ', 'q': 'ق', 'r': 'ر', 's': 'س', 't': 'ت', 'u': 'و',
    'v': 'و', 'w': 'و', 'x': 'خ', 'y': 'ی', 'z': 'ز', ' ': ' ', ',': ',', '.': '.'
};

function convertText(script) {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    switch(script) {
        case 'armenian':
            outputText = translateText(inputText, armenianMap);
            break;
        case 'georgian':
            outputText = translateText(inputText, georgianMap);
            break;
        case 'burmese':
            outputText = translateText(inputText, burmeseMap);
            break;
        case 'thai':
            outputText = translateText(inputText, thaiMap);
            break;
        case 'persian':
            outputText = translateText(inputText, persianMap);
            break;
        default:
            outputText = inputText;
    }

    document.getElementById('outputText').value = outputText;
}

function translateText(text, map) {
    return text.split('').map(char => map[char.toLowerCase()] || char).join('');
}

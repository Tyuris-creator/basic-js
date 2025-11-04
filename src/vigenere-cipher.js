const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this._process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    return this._process(encryptedMessage, key, "decrypt");
  }

  _process(str, key, mode) {
    const upperStr = str.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < upperStr.length; i++) {
      const char = upperStr[i];

      if (char >= "A" && char <= "Z") {
        const shift =
          upperKey[keyIndex % upperKey.length].charCodeAt(0) -
          "A".charCodeAt(0);
        let processedCharCode;

        if (mode === "encrypt") {
          processedCharCode =
            (char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26;
        } else if (mode === "decrypt") {
          processedCharCode =
            (char.charCodeAt(0) - "A".charCodeAt(0) - shift + 26) % 26;
        }

        result += String.fromCharCode(processedCharCode + "A".charCodeAt(0));
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

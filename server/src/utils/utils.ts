// file:    utils/utils.ts
// author:  sjosephs
// date:    24/03/17

import * as crypto from 'crypto';
import { PRIVATE_KEY } from '../config/auth.config';

var algorithm = 'aes-256-ctr';

export function decrypt(password: string) {
  let decipher = crypto.createDecipher(algorithm, PRIVATE_KEY);
  let dec = decipher.update(password, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

export function encrypt(password: string) {
  let cipher = crypto.createCipher(algorithm, PRIVATE_KEY);
  let crypted = cipher.update(password, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

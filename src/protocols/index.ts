import { Category } from '../constants';
import { bridges } from './bridges';
import { defi } from './defi';
import { gamings } from './gamings';
import { infra } from './infra';
import { nft } from './nft';
import { social } from './social';
import { wallet } from './wallet';

export type Protocol = {
  logoPath: string;
  url: string;
  name: string;
  category: Category;
  twitterUrl: string;
};

const protocols: Protocol[] = [
  ...bridges,
  ...defi,
  ...gamings,
  ...infra,
  ...nft,
  ...social,
  ...wallet,
];

// console.log(protocols, 'protocol');

export { protocols };

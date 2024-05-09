/**
 * Add new categories as needed to this enum for classification purposes.
 */
export enum Category {
  Bridge = 'Bridge',
  Defi = 'Defi',
  Gaming = 'Gaming',
  Infra = 'Infra',
  NFT = 'NFT',
  Social = 'Social',
  Wallet = 'Wallet',
}

export type Protocol = {
  logoPath: string;
  url: string;
  name: string;
  category: Category;
  twitterUrl: string;
};

const protocols: Protocol[] = [
  {
    name: 'Across',
    logoPath: 'logos/across.jpeg',
    url: 'https://across.to/',
    category: Category.Bridge,
    twitterUrl: 'https://twitter.com/AcrossProtocol',
  },
  {
    name: 'Aave',
    logoPath: 'logos/aave.jpeg',
    url: 'https://app.aave.com/',
    category: Category.Defi,
    twitterUrl: 'https://twitter.com/aave',
  },
  {
    name: 'BasePaint',
    logoPath: 'logos/basepaint.jpeg',
    url: 'https://basepaint.xyz/',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/basepaint_xyz',
  },
  {
    name: 'Amberdata',
    logoPath: 'logos/amberdata.jpeg',
    url: 'https://www.amberdata.io/',
    category: Category.Infra,
    twitterUrl: 'https://twitter.com/Amberdataio',
  },
  {
    name: 'Crossmint',
    logoPath: 'logos/crossmint.png',
    url: 'https://www.crossmint.com/',
    category: Category.NFT,
    twitterUrl: 'https://twitter.com/crossmint',
  },
  {
    name: 'Friend.Tech',
    logoPath: 'logos/friendtech.jpeg',
    url: 'https://www.friend.tech/',
    category: Category.Social,
    twitterUrl: 'https://twitter.com/friendtech',
  },
  {
    name: 'Coinbase Wallet',
    logoPath: 'logos/coinbasewallet.png',
    url: 'https://www.coinbase.com/wallet',
    category: Category.Wallet,
    twitterUrl: 'https://twitter.com/CoinbaseWallet',
  },
];

export { protocols };

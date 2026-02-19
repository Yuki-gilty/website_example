export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type Stylist = {
  name: string;
  role: string;
  specialty: string;
  instagram?: string;
  photoId?: string;
};

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

export type Review = {
  id: number;
  text: string;
  name: string;
};

export const SALON_NAME = "LUXE / AOYAMA";

export const conceptText = [
  "表参道の静かな路地裏に佇む、プライベートヘアサロン。",
  "一人ひとりの骨格とライフスタイルに寄り添い、毎日を少しだけ軽くする髪型を提案します。",
  "過剰な演出はなく、自然な美しさを引き出すことにこだわった空間です。",
];

export const menuItems: MenuItem[] = [
  {
    name: "Cut",
    description: "骨格とライフスタイルを考慮した、自然な動きのあるカット。",
    price: "¥8,800",
  },
  {
    name: "Color",
    description: "肌のトーンに合わせた、透明感のあるニュアンスカラー。",
    price: "¥11,000〜",
  },
  {
    name: "Perm",
    description: "自然な動きを生み出す、柔らかく上品なパーマ。",
    price: "¥13,200〜",
  },
  {
    name: "Treatment",
    description: "髪質改善を目的とした、オーダーメイドのトリートメント。",
    price: "¥7,700〜",
  },
];

export const stylists: Stylist[] = [
  {
    name: "石川 直",
    role: "Director",
    specialty: "ボブ / ショート / カラーコントロール",
    instagram: "https://instagram.com",
    photoId: "1524504388940-b1c1722653e1",
  },
  {
    name: "新井 美空",
    role: "Stylist",
    specialty: "ロングレイヤー / ブリーチワーク",
    instagram: "https://instagram.com",
    photoId: "1494790108371-be9c29b29330",
  },
  {
    name: "近藤 蒼太",
    role: "Stylist",
    specialty: "メンズ / パーマデザイン",
    instagram: "https://instagram.com",
    photoId: "1507003211169-0a1dd7228f2d",
  },
  {
    name: "高橋 凛",
    role: "Colorist",
    specialty: "ハイトーン / 透明感のあるカラー",
    instagram: "https://instagram.com",
    photoId: "1534528741775-53994a69daeb",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    alt: "エレガントなショートボブスタイル",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85",
    alt: "ナチュラルなロングヘアスタイル",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    alt: "サロンの内装 - モダンで洗練された空間",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    alt: "プロフェッショナルなカット作業の様子",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    alt: "ハイトーンカラーとグラデーション",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
    alt: "スタイリング後の完成スタイル",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85",
    alt: "メンズカットの仕上がり",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=85",
    alt: "ロングレイヤーのスタイリング",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "サロンの待合スペース",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    alt: "カラーリング作業中の様子",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    alt: "ナチュラルなボブスタイル",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    alt: "パーマの仕上がり",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    alt: "カラーとカットの組み合わせ",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    alt: "サロンのミラーとライティング",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    alt: "完成したヘアスタイルのポートレート",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    text: "初めて来店しましたが、スタッフの方の対応がとても丁寧で、仕上がりも期待以上でした。髪が伸びても形が崩れにくく、2ヶ月経ってもまだ綺麗な状態です。",
    name: "Kanaさん（32歳）",
  },
  {
    id: 2,
    text: "カラーの提案がいつも的確で、肌のトーンに合わせて選んでくれるので安心です。服とのバランスまで考えてくれるのが嬉しいです。",
    name: "Ryoさん（29歳）",
  },
  {
    id: 3,
    text: "派手すぎず、でもおしゃれな仕上がりにいつも満足しています。落ち着いた雰囲気のサロンで、リラックスしながら施術を受けられます。",
    name: "Maiさん（35歳）",
  },
];

export const access = {
  address: "〒107-0062 東京都港区南青山 3-15-12 LUXE AOYAMA 3F",
  station: "東京メトロ「表参道駅」A4出口より徒歩5分",
  hours: "平日 11:00–20:00 / 土日祝 10:00–19:00",
  closed: "毎週火曜日",
  phone: "03-6459-1234",
  email: "info@luxe-aoyama.jp",
};

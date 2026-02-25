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

export type NewsItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  body: string;
};

export const SALON_NAME = "LUXE / AOYAMA";

export const conceptText = [
  "表参道の喧騒から一歩離れた、静かなプライベートヘアサロン。",
  "髪型だけでなく、服やライフスタイルまで含めて似合うバランスを設計します。",
  "過剰に盛らず、触れたくなる質感と長く楽しめるシルエットを大切にしています。",
];

export const menuItems: MenuItem[] = [
  {
    name: "Cut & Styling",
    description: "骨格・毛流れ・クセを見極め、再現性まで考えたデザインカット。",
    price: "¥8,800",
  },
  {
    name: "Color Design",
    description: "透明感と深みを両立した、肌トーンに馴染むカラー提案。",
    price: "¥11,000〜",
  },
  {
    name: "Head Spa",
    description: "頭皮環境を整えながら、疲れをリセットする30分スパ。",
    price: "¥6,600",
  },
  {
    name: "Hair Repair",
    description: "質感とツヤを引き上げる、髪質に合わせた集中トリートメント。",
    price: "¥7,700〜",
  },
  {
    name: "Premium Course",
    description: "カット・カラー・トリートメントを組み合わせた総合メンテナンス。",
    price: "¥18,000〜",
  },
  {
    name: "Men's Grooming",
    description: "清潔感と色気を両立する、メンズ向けカットと眉デザイン。",
    price: "¥9,200",
  },
];

export const stylists: Stylist[] = [
  {
    name: "石川 直",
    role: "Director",
    specialty: "ショート / ミニボブ / 質感コントロール",
    instagram: "https://instagram.com",
    photoId: "1524504388940-b1c1722653e1",
  },
  {
    name: "新井 美空",
    role: "Top Stylist",
    specialty: "ロングレイヤー / 艶カラー / 顔まわりデザイン",
    instagram: "https://instagram.com",
    photoId: "1494790108371-be9c29b29330",
  },
  {
    name: "近藤 蒼太",
    role: "Stylist",
    specialty: "メンズカット / ニュアンスパーマ / バーバースタイル",
    instagram: "https://instagram.com",
    photoId: "1507003211169-0a1dd7228f2d",
  },
  {
    name: "高橋 凛",
    role: "Colorist",
    specialty: "ハイトーン / ブリーチワーク / デザインカラー",
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
    alt: "モダンで洗練されたサロン空間",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
    alt: "カット施術中のワンシーン",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
    alt: "透明感のあるカラーリング",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
    alt: "仕上げ後のスタイルフォト",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85",
    alt: "メンズカットのフィニッシュ",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=85",
    alt: "ロングレイヤーの柔らかな動き",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "落ち着いた待合スペース",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    alt: "カラー施術のディテール",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    alt: "自然な丸みのボブデザイン",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85",
    alt: "柔らかなニュアンスパーマ",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    text: "仕上がりが綺麗なのはもちろん、伸びても形が崩れにくく毎朝が本当に楽です。",
    name: "Kanaさん（32歳）",
  },
  {
    id: 2,
    text: "カラーの提案が的確で、肌の透明感まで変わって見えるのが毎回うれしいです。",
    name: "Ryoさん（29歳）",
  },
  {
    id: 3,
    text: "空間が静かで落ち着いていて、施術時間そのものがリフレッシュになります。",
    name: "Maiさん（35歳）",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2026.02.20",
    category: "News",
    title: "春のカラーキャンペーンを開始しました",
    body: "透明感カラーと集中トリートメントを組み合わせた期間限定プランをご案内しています。",
  },
  {
    id: 2,
    date: "2026.02.14",
    category: "Info",
    title: "3月の定休日について",
    body: "毎週火曜日に加え、3月18日（水）は店内メンテナンスのため休業となります。",
  },
  {
    id: 3,
    date: "2026.02.08",
    category: "Media",
    title: "スタイリング記事掲載のお知らせ",
    body: "LUXEのショートスタイル提案がオンラインメディアに掲載されました。詳しくは店頭でご案内します。",
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

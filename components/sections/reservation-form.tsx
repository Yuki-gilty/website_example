"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { access, menuItems, stylists } from "@/lib/content";

type ReservationFormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  menu: string;
  stylist: string;
  note: string;
  consent: boolean;
};

type ReservationRecord = Omit<ReservationFormState, "consent"> & {
  reservationId: string;
  createdAt: string;
};

const INITIAL_FORM: ReservationFormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  menu: "",
  stylist: "",
  note: "",
  consent: false,
};

const TIME_OPTIONS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

function createReservationId() {
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  const stamp = Date.now().toString().slice(-6);
  return `LX-${stamp}-${random}`;
}

function getTodayDateString() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export function ReservationForm() {
  const [form, setForm] = useState<ReservationFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState<ReservationRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  const minimumDate = useMemo(() => getTodayDateString(), []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.date || !form.time || !form.menu) {
      setError("必須項目を入力してください。");
      return;
    }

    if (!form.consent) {
      setError("プライバシーポリシーへの同意が必要です。");
      return;
    }

    const record: ReservationRecord = {
      reservationId: createReservationId(),
      createdAt: new Date().toLocaleString("ja-JP", { hour12: false }),
      name: form.name,
      phone: form.phone,
      email: form.email,
      date: form.date,
      time: form.time,
      menu: form.menu,
      stylist: form.stylist || "指名なし",
      note: form.note,
    };

    try {
      const key = "luxe_reservations";
      const existingRaw = localStorage.getItem(key);
      const existing = existingRaw ? (JSON.parse(existingRaw) as ReservationRecord[]) : [];
      localStorage.setItem(key, JSON.stringify([record, ...existing].slice(0, 50)));
    } catch {
      // LocalStorage が使えない環境でも送信フローは継続
    }

    setSubmitted(record);
    setError(null);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
      <div className="rounded-[16px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/88 p-6 md:p-8">
        <h2 className="text-xl text-main md:text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
          Web予約フォーム
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-subtle">
          入力後に送信すると仮予約として受け付けます。営業時間内に確認連絡を差し上げ、予約確定となります。
        </p>

        {error && (
          <p className="mt-4 rounded-[10px] border border-white/30 bg-white/[0.05] px-3 py-2 text-sm text-white/90">
            {error}
          </p>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-subtle" htmlFor="name">
              お名前 <span className="text-white/78">*</span>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/18 bg-white/[0.02] px-3 py-3 text-sm text-main outline-none transition-colors placeholder:text-white/35 focus:border-white/45"
                placeholder="例）山田 花子"
              />
            </label>

            <label className="space-y-2 text-sm text-subtle" htmlFor="phone">
              電話番号 <span className="text-white/78">*</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/18 bg-white/[0.02] px-3 py-3 text-sm text-main outline-none transition-colors placeholder:text-white/35 focus:border-white/45"
                placeholder="例）09012345678"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm text-subtle" htmlFor="email">
            メールアドレス <span className="text-white/78">*</span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-[10px] border border-white/18 bg-white/[0.02] px-3 py-3 text-sm text-main outline-none transition-colors placeholder:text-white/35 focus:border-white/45"
              placeholder="例）you@example.com"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-subtle" htmlFor="date">
              希望日 <span className="text-white/78">*</span>
              <input
                id="date"
                name="date"
                type="date"
                min={minimumDate}
                value={form.date}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/18 bg-white/[0.02] px-3 py-3 text-sm text-main outline-none transition-colors focus:border-white/45"
              />
            </label>

            <label className="space-y-2 text-sm text-subtle" htmlFor="time">
              希望時間 <span className="text-white/78">*</span>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/18 bg-[color:var(--bg-surface)] px-3 py-3 text-sm text-main outline-none transition-colors focus:border-white/45"
              >
                <option value="">選択してください</option>
                {TIME_OPTIONS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-subtle" htmlFor="menu">
              メニュー <span className="text-white/78">*</span>
              <select
                id="menu"
                name="menu"
                value={form.menu}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/18 bg-[color:var(--bg-surface)] px-3 py-3 text-sm text-main outline-none transition-colors focus:border-white/45"
              >
                <option value="">選択してください</option>
                {menuItems.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm text-subtle" htmlFor="stylist">
              スタイリスト指名
              <select
                id="stylist"
                name="stylist"
                value={form.stylist}
                onChange={handleChange}
                className="w-full rounded-[10px] border border-white/18 bg-[color:var(--bg-surface)] px-3 py-3 text-sm text-main outline-none transition-colors focus:border-white/45"
              >
                <option value="">指名なし</option>
                {stylists.map((stylist) => (
                  <option key={stylist.name} value={stylist.name}>
                    {stylist.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block space-y-2 text-sm text-subtle" htmlFor="note">
            ご要望・ご相談
            <textarea
              id="note"
              name="note"
              rows={4}
              value={form.note}
              onChange={handleChange}
              className="w-full resize-y rounded-[10px] border border-white/18 bg-white/[0.02] px-3 py-3 text-sm text-main outline-none transition-colors placeholder:text-white/35 focus:border-white/45"
              placeholder="髪の状態やご希望のイメージがあればご記入ください"
            />
          </label>

          <label className="flex items-start gap-3 rounded-[10px] border border-white/14 bg-white/[0.02] px-3 py-3 text-sm text-subtle">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4"
            />
            <span>
              プライバシーポリシーに同意して予約を送信します。
              <span className="ml-1 text-white/78">*</span>
            </span>
          </label>

          <Button
            type="submit"
            aria-label="予約フォームを送信"
            className="min-h-11 w-full !border-white/80 !bg-white/14 !text-white"
          >
            予約を送信する
          </Button>
        </form>
      </div>

      <div className="space-y-5">
        <div className="rounded-[16px] border border-[color:var(--border-soft)] bg-[color:var(--bg-surface)]/86 p-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/62">Contact</p>
          <p className="mt-2 text-sm leading-relaxed text-subtle">
            お急ぎの場合はお電話でのご予約がスムーズです。施術中は折り返しになる場合があります。
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${access.phone.replace(/-/g, "")}`} className="block text-main transition-colors hover:text-white">
              {access.phone}
            </a>
            <a href={`mailto:${access.email}`} className="block text-subtle transition-colors hover:text-white">
              {access.email}
            </a>
          </div>
        </div>

        {submitted && (
          <div className="rounded-[16px] border border-white/22 bg-white/[0.04] p-5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/64">Reservation Completed</p>
            <p className="mt-2 text-base text-main">仮予約を受け付けました。</p>
            <p className="mt-1 text-sm text-subtle">予約番号: {submitted.reservationId}</p>
            <p className="mt-1 text-sm text-subtle">受付日時: {submitted.createdAt}</p>
            <div className="mt-4 space-y-1 text-sm text-subtle">
              <p>お名前: {submitted.name}</p>
              <p>希望日時: {submitted.date} {submitted.time}</p>
              <p>メニュー: {submitted.menu}</p>
              <p>担当: {submitted.stylist}</p>
            </div>
            <p className="mt-4 text-xs text-white/70">
              内容確認後、スタッフから確定連絡を差し上げます。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

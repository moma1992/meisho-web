"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">お問い合わせ</h1>
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                お名前
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                電話番号
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                お問い合わせ内容
              </label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">お電話でのお問い合わせ</h2>
          <p className="text-xl">
            TEL: <a href="tel:072-298-6900" className="text-primary hover:underline">072-298-6900</a>
          </p>
          <p className="text-xl">
            FAX: 072-298-6902
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">所在地</h3>
            <p>本社: 大阪府堺市南区桃山台2-3-4</p>
            <p>車庫: 大阪府堺市南区和田295-1</p>
          </div>
        </div>
      </div>
    </main>
  );
}
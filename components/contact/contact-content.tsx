'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  MessageSquare,
  Building2,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

export function ContactContent() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const contactInfo = [
    {
      icon: Clock,
      title: "営業時間",
      primary: "月曜日 - 金曜日: 8:00 - 17:00",
      secondary: "土曜日: 8:00 - 12:00",
      details: "日曜・祝日: 休業"
    },
    {
      icon: Phone,
      title: "お電話でのお問い合わせ",
      primary: "072-298-6900",
      secondary: "電話受付: 平日 9時〜17時",
      href: "tel:0722986900"
    },
    {
      icon: Mail,
      title: "メールでのお問い合わせ",
      primary: "meisho-sakai@work.odn.ne.jp",
      href: "mailto:meisho-sakai@work.odn.ne.jp"
    },
    {
      icon: Building2,
      title: "本社",
      primary: "〒590-0141",
      secondary: "大阪府堺市南区桃山台2-3-4"
    },
    {
      icon: Truck,
      title: "車庫",
      primary: "〒590-0152",
      secondary: "大阪府堺市南区和田295-1"
    }
  ];

  const locations = [
    {
      title: "本社",
      address: "大阪府堺市南区桃山台2-3-4",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167132768424!2d135.4896!3d34.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzA0LjEiTiAxMzXCsDI5JzM0LjYiRQ!5e0!3m2!1sja!2sjp!4v1651234567890!5m2!1sja!2sjp",
      access: "泉北高速鉄道 光明池駅より徒歩10分"
    },
    {
      title: "車庫",
      address: "大阪府堺市南区和田295-1",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d135.495!3d34.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzA0LjEiTiAxMzXCsDI5JzM0LjYiRQ!5e0!3m2!1sja!2sjp!4v1651234567890!5m2!1sja!2sjp",
      access: "阪和自動車道 泉北ICより5分"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#1a2238] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              お問い合わせ
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ご相談・ご質問等ございましたら、お気軽にお問い合わせください。
              24時間体制で物流サービスに関するご相談を承っております。
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Information */}
            <div className="lg:w-1/2 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-[#243050] border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-[#3b82f6]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="group flex items-center text-xl font-bold text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
                            >
                              {item.primary}
                              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{item.primary}</p>
                          )}
                          {item.secondary && (
                            <p className="text-gray-300 text-sm mt-1">{item.secondary}</p>
                          )}
                          {item.details && (
                            <p className="text-gray-300 text-sm">{item.details}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Maps */}
            <div className="lg:w-1/2 space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-[#243050] border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                        <iframe
                          src={location.mapUrl}
                          className="absolute inset-0 w-full h-full rounded-lg"
                          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(85%)' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-[#1a2238]/90 p-4 rounded-lg backdrop-blur-sm">
                          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-[#3b82f6]" />
                            {location.title}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {location.address}<br />
                            {location.access}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function QuoteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="lg">
          お見積もり依頼
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>お見積もり依頼</DialogTitle>
          <DialogDescription>
            必要な情報をご入力いただき、お見積もりをご依頼ください。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Quote form content will go here */}
          <p className="text-sm text-muted-foreground">
            フォームは準備中です。お手数ですが、お電話またはメールにてお問い合わせください。
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
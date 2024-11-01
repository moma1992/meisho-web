'use client';

import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface EquipmentItem {
  name: string;
  count?: number;
  description: string;
}

interface EquipmentCategory {
  category: string;
  items: EquipmentItem[];
}

interface EquipmentProps {
  categories: EquipmentCategory[];
}

export function Equipment({ categories }: EquipmentProps) {
  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h3 className="mb-4 text-lg font-semibold">{category.category}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>品名</TableHead>
                {category.items.some((item) => item.count !== undefined) && (
                  <TableHead className="w-24">台数</TableHead>
                )}
                <TableHead>詳細</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {category.items.map((item, index) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  {category.items.some((item) => item.count !== undefined) && (
                    <TableCell>{item.count || '-'}</TableCell>
                  )}
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: categories.length * 0.1 }}
        className="mt-4 text-sm text-muted-foreground"
      >
        <p>総車両数: 19台</p>
      </motion.div>
    </div>
  );
}
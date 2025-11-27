import { Headphones, Keyboard, Laptop, Mouse } from 'lucide-react';

export const devices = [
  {
    name: 'ThinkPad T14 Gen 2 14"',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Tezarre TK63 Pro (Off-White)',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'A4tech FB35CS',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Sony Wireless',
    icon: <Headphones className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'uBlock Origin Lite', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
];

export const software = [
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'Cap', href: 'https://cap.so/home' },
  { name: 'Cursor', href: 'https://cursor.com' },
  { name: 'Requestly', href: 'https://requestly.com/' },
  { name: 'Kiro', href: 'https://kiro.dev' },
];

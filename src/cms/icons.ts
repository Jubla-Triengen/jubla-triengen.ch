import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Tent,
  TreePine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  tent: Tent,
  mountain: Mountain,
  "tree-pine": TreePine,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  facebook: Facebook,
  instagram: Instagram,
};

export function resolveIcon(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return iconRegistry[name];
}

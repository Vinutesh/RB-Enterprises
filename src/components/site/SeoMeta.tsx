import { useSeoMeta } from "@/utils/seo";

type SeoMetaProps = {
  title: string;
  description: string;
};

export const SeoMeta = ({ title, description }: SeoMetaProps) => {
  useSeoMeta({ title, description });
  return null;
};

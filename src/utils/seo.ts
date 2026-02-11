import { useEffect } from "react";

type SeoMetaProps = {
  title: string;
  description: string;
};

export const useSeoMeta = ({ title, description }: SeoMetaProps) => {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);
  }, [description, title]);
};

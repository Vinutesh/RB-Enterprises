export type EnquiryFormValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  inquiryType: string;
  message: string;
};

const WHATSAPP_NUMBER = "919999999999";
const EMAIL_ADDRESS = "test@gmail.com";

const buildLeadMessage = (values: EnquiryFormValues) => {
  return [
    "New Website Enquiry - RB Enterprises",
    "Lead Flow Note: Site visit requested as first step.",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Inquiry Type: ${values.inquiryType}`,
    `Project Type: ${values.projectType}`,
    `Budget: ${values.budget}`,
    `Message: ${values.message}`,
  ].join("\n");
};

export const buildWhatsappUrl = (values: EnquiryFormValues) => {
  const text = encodeURIComponent(buildLeadMessage(values));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const buildMailtoUrl = (values: EnquiryFormValues) => {
  const subject = encodeURIComponent(`New ${values.inquiryType} enquiry from ${values.name}`);
  const body = encodeURIComponent(buildLeadMessage(values));
  return `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
};

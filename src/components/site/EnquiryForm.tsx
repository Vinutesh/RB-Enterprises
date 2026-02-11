import { FormEvent, useState } from "react";
import { buildMailtoUrl, buildWhatsappUrl, EnquiryFormValues } from "@/utils/lead";

const initialForm: EnquiryFormValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  budget: "",
  inquiryType: "Interior Consultation",
  message: "",
};

export const EnquiryForm = () => {
  const [formValues, setFormValues] = useState<EnquiryFormValues>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappUrl = buildWhatsappUrl(formValues);
    const mailtoUrl = buildMailtoUrl(formValues);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8">
      <p className="mb-4 text-sm text-primary">Lead flow note: Our team schedules a site visit as the first step.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { key: "name", label: "Name", type: "text", required: true },
          { key: "phone", label: "Phone", type: "tel", required: true },
          { key: "email", label: "Email", type: "email", required: true },
          { key: "projectType", label: "Project Type", type: "text", required: true },
          { key: "budget", label: "Budget", type: "text", required: true },
        ].map((field) => (
          <label key={field.key} className="text-sm text-foreground/90">
            {field.label}
            <input
              type={field.type}
              required={field.required}
              value={formValues[field.key as keyof EnquiryFormValues]}
              onChange={(event) => setFormValues((prev) => ({ ...prev, [field.key]: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm"
            />
          </label>
        ))}

        <label className="text-sm text-foreground/90">
          Inquiry Type
          <select
            value={formValues.inquiryType}
            onChange={(event) => setFormValues((prev) => ({ ...prev, inquiryType: event.target.value }))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-black px-3 py-2 text-sm"
          >
            <option>Interior Consultation</option>
            <option>Hardware / Bulk Orders</option>
            <option>General Enquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm text-foreground/90">
        Message
        <textarea
          required
          value={formValues.message}
          onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
          rows={5}
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm"
        />
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:bg-primary/90"
      >
        Submit Enquiry
      </button>
    </form>
  );
};

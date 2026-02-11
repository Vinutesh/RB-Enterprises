import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const projectTypes = ["Residential", "Commercial", "Urban Planning", "Landmark", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert([form]);
      if (error) throw error;

      // Trigger email notification
      try {
        await supabase.functions.invoke("send-contact-notification", { body: form });
      } catch {
        // Email notification is best-effort
      }

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", project_type: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight mt-4">
            Let's Talk
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Have a project in mind? We'd love to hear about it. Fill out the form below and our team will get back to you within 48 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-muted-foreground">Name *</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-secondary border-border h-12"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-muted-foreground">Email *</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary border-border h-12"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-muted-foreground">Phone</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-secondary border-border h-12"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-muted-foreground">Project Type</label>
              <select
                value={form.project_type}
                onChange={(e) => setForm({ ...form, project_type: e.target.value })}
                className="flex h-12 w-full border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-wide text-muted-foreground">Message *</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary border-border min-h-[160px]"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-sm tracking-wide uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>
    </Layout>
  );
};

export default Contact;

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const ContactIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "MapPin":
      return <MapPin className="h-6 w-6" />;
    case "Mail":
      return <Mail className="h-6 w-6" />;
    case "Phone":
      return <Phone className="h-6 w-6" />;
    default:
      return null;
  }
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "Facebook":
      return <Facebook className="h-5 w-5" />;
    case "Twitter":
      return <Twitter className="h-5 w-5" />;
    case "Instagram":
      return <Instagram className="h-5 w-5" />;
    case "Linkedin":
      return <Linkedin className="h-5 w-5" />;
    default:
      return null;
  }
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally be connected to a backend API
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Join Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white opacity-90">
            Interested in supporting KrishiMitra? Reach out to us!
          </p>
        </div>

        <Card className="mt-16 overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-neutral-900">Get in Touch</h3>
              <p className="mt-4 text-neutral-700">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help?" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Your message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="lg:w-1/2 bg-neutral-50 p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Contact Information</h3>
                  <p className="mt-2 text-neutral-700">
                    Have questions or want to learn more about KrishiMitra? We're here to help!
                  </p>
                </div>
                
                {CONTACT_INFO.map((info) => (
                  <div key={info.title} className="flex">
                    <ContactIcon icon={info.icon} className="text-primary text-xl mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-neutral-900">{info.title}</h4>
                      <p className="mt-1 text-neutral-700">{info.value}</p>
                    </div>
                  </div>
                ))}
                
                <div className="flex">
                  <Globe className="text-primary text-xl mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-neutral-900">Social Media</h4>
                    <div className="mt-2 flex space-x-4">
                      {SOCIAL_LINKS.map((social) => (
                        <a 
                          key={social.platform} 
                          href={social.url} 
                          className="text-neutral-700 hover:text-primary"
                          aria-label={social.platform}
                        >
                          <SocialIcon icon={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

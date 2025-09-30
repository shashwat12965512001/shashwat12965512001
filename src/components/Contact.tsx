import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ss12965512001@gmail.com",
      href: "mailto:ss12965512001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8528583204",
      href: "tel:+918528583204"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ss12965512001",
      username: "ss12965512001"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/shashwat12965512001",
      username: "shashwat12965512001"
    },
    {
      icon: ExternalLink,
      label: "Codolio",
      href: "https://codolio.com/profile/ss12965512001",
      username: "ss12965512001"
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-card/30" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={index} className="card-hover bg-dark-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-neon/10 p-3 rounded-lg">
                            <IconComponent className="w-5 h-5 text-neon" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <a 
                              href={contact.href}
                              className="text-foreground hover:text-neon transition-colors font-medium"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-dark-card border border-border hover:border-neon/50 hover:bg-neon/5 transition-all group"
                      >
                        <IconComponent className="w-5 h-5 text-neon" />
                        <div>
                          <span className="text-foreground group-hover:text-neon transition-colors">{social.label}</span>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="card-hover bg-gradient-to-br from-neon/10 to-neon-glow/10 border-neon/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-neon/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-neon" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                  </p>
                  
                  <Button 
                    variant="neon" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:ss12965512001@gmail.com'}
                  >
                    Send Me a Message
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-dark-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Available For</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Full-time opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Freelance projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Consulting & collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
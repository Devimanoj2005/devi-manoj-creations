import { Award, Trophy, Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import astraCert from "@/assets/certificates/asthra-certificate.png";
import yipCert from "@/assets/certificates/yip-certificate.png";
import gdgCert from "@/assets/certificates/gdg-certificate.jpg";

const certifications = [
  {
    icon: Briefcase,
    title: "Internship – SJCET Pala",
    description: "Completed a technical internship at St. Joseph's College of Engineering and Technology (SJCET), Pala, where I gained hands-on experience in software development, teamwork, and understanding real-world engineering workflows.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon – Runner-Up",
    description: "Achieved Runner-Up position in the preliminary level of the Smart India Hackathon (SIH). Demonstrated strong technical skills, innovative thinking, and teamwork by developing a solution aligned with real-world problem statements.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Users,
    title: "Hackathon – MBTS, Kothamangalam",
    description: "Participated in a 13-hour hackathon organized by MBTS, Kothamangalam. Collaborated with a team to build a functional prototype within a limited time frame, showcasing problem-solving skills, time management, and creativity under pressure.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Award,
    title: "Hackathon – Mar Athanasius College",
    description: "Attended a hackathon hosted by Mar Athanasius College of Engineering, Kothamangalam, where I contributed to designing and developing a project solution within the given theme.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }
];

const certificateImages = [
  {
    title: "ASTHRA 10.0 - Hardwire Hacking Workshop",
    description: "Certificate of Participation for completing a Hardwire Hacking Workshop at ASTHRA 10.0, National Level Annual Tech Fest at SJCET Palai (Sept 19-20, 2025)",
    image: astraCert,
    color: "text-cyan-500",
    bgGradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Young Innovators Program 8.0",
    description: "Certificate of Appreciation for completing Voice of Stakeholder (VOS) Training as part of the Young Innovators Program 8.0 conducted by K-DISC (Nov 12, 2025)",
    image: yipCert,
    color: "text-red-500",
    bgGradient: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Google Developer Groups - Cloud AI Session",
    description: "Certificate of Participation for attending 'Hello to Cloud AI' session exploring Google Cloud Platform and Gemini AI at Mar Athanasius College (Oct 27, 2025)",
    image: gdgCert,
    color: "text-yellow-500",
    bgGradient: "from-yellow-500/20 to-amber-500/20"
  }
];

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-slide-in">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group btn-magnetic"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${cert.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certificate Images Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Official <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          {certificateImages.map((cert, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 btn-magnetic cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className={`relative h-64 bg-gradient-to-br ${cert.bgGradient} overflow-hidden`}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-xs text-muted-foreground">Click to view certificate</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className={`font-bold mb-2 ${cert.color} group-hover:scale-105 transition-transform duration-300`}>
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={certificateImages.map(cert => cert.image)}
          currentIndex={selectedImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default Certifications;

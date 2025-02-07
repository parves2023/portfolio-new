import { Mail, Phone, MessageCircle } from "lucide-react";
import { Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 z-0">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Information</h2>
        <div className="card-body space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" />
            <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-500">
              parvesmosarof2@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-green-500" />
            <a href="tel:+8801516502364" className="text-gray-700 hover:text-green-500">
              +880 1516 502364
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MessageCircle className="text-purple-500" />
            <a
              href="https://wa.me/8801516502364"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-500"
            >
              WhatsApp: +880 1516 502364
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="text-blue-700" />
            <a
              href="https://www.facebook.com/profile.php?id=100055235052516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              Facebook Profile
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/parves-mosarof-565b15273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
